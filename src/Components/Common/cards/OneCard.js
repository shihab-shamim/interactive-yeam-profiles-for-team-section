import React from 'react';

const OneCard = () => {
  return (
    <section className="itp_team_section">
      <div className="itp_team_section__container">
        

        {/* Cards Grid */}
        <div className="itp_team_section__cards">

          {/* Card 1 */}
          <div className="itp_team_section__card">
            <div className="itp_team_section__img-box">
              <img
                src="https://images.pexels.com/photos/3131819/pexels-photo-3131819.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portrait of Bhairab Patra"
              />
            </div>
            <div className="itp_team_section__content">
              <h2>Bhairab Patra</h2>
              <h3>
                {/* Pen Nib SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M358.9 0L384 25.1 356.9 52.2 384 79.3 256 207.3l-14.3 14.3-10.1-6.1C203.4 198.4 160 212.5 160 248c0 22.6 9.9 40.8 22.6 55.4l-29 29C135.6 313.8 128 289.5 128 264c0-55.5 36.8-97.4 88.2-110.5L352 17.5 358.9 0zM256 320a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm64 112c-35.3 0-64 28.7-64 64v16H320V496c0-35.3-28.7-64-64-64zm64-192v96c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V240l64 0 0-80H192L384 0 448 64 256 256l0 0z" />
                </svg>
                UX / UI Designer
              </h3>
              <p>Crafting seamless digital experiences with an eye for detail and a passion for great design.</p>
              <ul className="itp_team_section__social-links">
                <li>
                  <a href="#" aria-label="Facebook">
                    {/* Facebook SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="X (Twitter)">
                    {/* X / Twitter SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    {/* LinkedIn SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="itp_team_section__card">
            <div className="itp_team_section__img-box">
              <img
                src="https://images.pexels.com/photos/4856247/pexels-photo-4856247.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portrait of Swapna"
              />
            </div>
            <div className="itp_team_section__content">
              <h2>Swapna</h2>
              <h3>
                {/* Users SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
                HR Manager
              </h3>
              <p>Building a thriving culture by connecting people with purpose and creating a great workplace.</p>
              <ul className="itp_team_section__social-links">
                <li>
                  <a href="#" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="X (Twitter)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="itp_team_section__card">
            <div className="itp_team_section__img-box">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portrait of Virat"
              />
            </div>
            <div className="itp_team_section__content">
              <h2>Virat</h2>
              <h3>
                {/* Code / Developer SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                </svg>
                Java Developer
              </h3>
              <p>Writing robust, scalable backend systems that power products millions of people rely on.</p>
              <ul className="itp_team_section__social-links">
                <li>
                  <a href="#" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="X (Twitter)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OneCard;
