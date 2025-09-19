export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={7}>
        The assignment is available online Submit a link to the landing page of
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" defaultValue={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>Assignments</option>
              <option>Projects</option>
              <option>In-Class Activities</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
              <option>Decimal</option>
              <option>Letter</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
              <option>In Person</option>
            </select>
            <br />
            <br />
            <div id="wd-online-entry-options">
              <span>Online Entry Options</span>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-option"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-option"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-option"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-option"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-option"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
              <br />
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" type="text" defaultValue="Everyone" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" defaultValue="2025-01-01" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Available</label>
          </td>
          <td>
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">From</label>
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="wd-available-from"
                    type="date"
                    defaultValue="2025-01-01"
                  />
                </td>
                <td>
                  <input
                    id="wd-available-until"
                    type="date"
                    defaultValue="2025-12-31"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <hr />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
