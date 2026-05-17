function getCompanyCache() {

  const raw =
    localStorage.getItem("occultusCompanies");

  if (!raw) return [];

  return JSON.parse(raw).companies || [];

}

function generateStars(rating) {

  let stars = "";

  for (let i = 1; i <= 10; i++) {

    stars += `
      <span class="${
        i <= rating
          ? "company-star filled"
          : "company-star"
      }">
        ★
      </span>
    `;

  }

  return stars;

}

function renderCompanies() {

  const grid =
    document.getElementById("companyGrid");

  if (!grid) return;

  const companies = getCompanyCache();

  if (!companies.length) {

    grid.innerHTML = `
      <div class="quote-box">
        No company data cached yet.
      </div>
    `;

    return;

  }

  // SORT HIGHEST TO LOWEST RATING
  const sortedCompanies = [...companies].sort((a, b) => {
    return (b.profile?.rating || 0) - (a.profile?.rating || 0);
  });

  grid.innerHTML = sortedCompanies.map(company => {

    const profile = company.profile;

    return `

      <div class="faction-card company-card">

        <h3>${profile.name}</h3>

        <p>
          ${profile.type.name}
        </p>

        <div class="company-stars">
          ${generateStars(profile.rating)}
        </div>

        <div class="faction-meta">

          Director:
          <a
            href="https://www.torn.com/profiles.php?XID=${profile.director.id}"
            target="_blank"
          >
            ${profile.director.name}
          </a>

        </div>

        <div class="faction-meta">

          Company ID:
          <a
            href="https://www.torn.com/joblist.php?step=search#!p=corpinfo&ID=${profile.id}"
            target="_blank"
          >
            ${profile.id}
          </a>

        </div>

        <div class="faction-meta">
          Employees:
          ${profile.employees.hired}
          /
          ${profile.employees.capacity}
        </div>

        <div class="company-expand">

        <div class="company-detail-grid">

            <div>
            <strong>Daily Income</strong><br>
            $${profile.income.daily.toLocaleString()}
            </div>

            <div>
            <strong>Weekly Income</strong><br>
            $${profile.income.weekly.toLocaleString()}
            </div>

            <div>
            <strong>Monthly Income</strong><br>
            $${(profile.income.weekly * 4).toLocaleString()}
            </div>

        </div>

        <h4 class="employee-title">Employees</h4>

        <div class="employee-list">
            ${company.employees.map(employee => `
            <div class="employee-row">
                <div>
                <a href="https://www.torn.com/profiles.php?XID=${employee.id}" target="_blank">
                    ${employee.name}
                </a>
                </div>

                <div>${employee.position.name}</div>
                <div>${employee.last_action.relative}</div>
            </div>
            `).join("")}
        </div>

        </div>

      </div>

    `;

  }).join("");

  setupCompanyCards();

}

function setupCompanyCards() {

  const cards =
    document.querySelectorAll(".company-card");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      card.classList.toggle("expanded");

    });

  });

}

window.addEventListener(
  "DOMContentLoaded",
  renderCompanies
);