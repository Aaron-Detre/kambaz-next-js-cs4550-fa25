import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <table id="wd-dashboard-courses">
        <tbody>
          <tr>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/1234" className="wd-dashboard-course-link">
                  <Image
                    src="/images/react.png"
                    alt="react logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS1234 React </h5>
                    <p className="wd-dashboard-course-title">React developer</p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/9876" className="wd-dashboard-course-link">
                  <Image
                    src="/images/angular.png"
                    alt="angular logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS9876 Angular </h5>
                    <p className="wd-dashboard-course-title">
                      Angular developer
                    </p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/4729" className="wd-dashboard-course-link">
                  <Image
                    src="/images/vue.svg"
                    alt="vue logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS4729 Vue </h5>
                    <p className="wd-dashboard-course-title">Vue developer</p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/2069" className="wd-dashboard-course-link">
                  <Image
                    src="/images/svelte.png"
                    alt="svelte logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS2069 Svelte </h5>
                    <p className="wd-dashboard-course-title">
                      Svelte developer
                    </p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/5937" className="wd-dashboard-course-link">
                  <Image
                    src="/images/ember.png"
                    alt="Ember logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS5937 Ember </h5>
                    <p className="wd-dashboard-course-title">Ember developer</p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/6798" className="wd-dashboard-course-link">
                  <Image
                    src="/images/alpine.jpg"
                    alt="Alpine logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS6798 Alpine </h5>
                    <p className="wd-dashboard-course-title">
                      Alpine developer
                    </p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/7999" className="wd-dashboard-course-link">
                  <Image
                    src="/images/ASP.png"
                    alt="ASP.NET logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS7999 ASP.NET </h5>
                    <p className="wd-dashboard-course-title">
                      ASP.NET developer
                    </p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/2310" className="wd-dashboard-course-link">
                  <Image
                    src="/images/jQuery.webp"
                    alt="jQuery logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS2310 jQuery </h5>
                    <p className="wd-dashboard-course-title">
                      jQuery developer
                    </p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
            <td>
              <div className="wd-dashboard-course">
                <Link href="/Courses/4730" className="wd-dashboard-course-link">
                  <Image
                    src="/images/qwik.png"
                    alt="qwik logo"
                    width={200}
                    height={150}
                  />
                  <div>
                    <h5> CS4729 Qwik </h5>
                    <p className="wd-dashboard-course-title">Qwik developer</p>
                    <button> Go </button>
                  </div>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
