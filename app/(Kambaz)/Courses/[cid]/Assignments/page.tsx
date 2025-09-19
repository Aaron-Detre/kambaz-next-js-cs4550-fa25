export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 30% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>
          <p className="wd-assignment-info">
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
            <b>Due</b> May 13 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="/Courses/1234/Assignments/822"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <p className="wd-assignment-info">
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a
            href="/Courses/1234/Assignments/791"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <p className="wd-assignment-info">
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </p>
        </li>
      </ul>
      <h3 id="wd-quizzes-title">
        QUIZZES 10% of Total <button>+</button>
      </h3>
      <h3 id="wd-exams-title">
        EXAMS 30% of Total <button>+</button>
      </h3>
      <h3 id="wd-projects-title">
        PROJECTS 30% of Total <button>+</button>
      </h3>
    </div>
  );
}
