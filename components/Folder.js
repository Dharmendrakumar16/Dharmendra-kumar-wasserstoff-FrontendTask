import { useState } from "react";
import styles from "../styles/Home.module.css";

function Folder({ handleInsertNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const [editMode, setEditMode] = useState(false);
  const [fileContent, setFileContent] = useState(explorer.content);

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleFileClick = () => {
    setEditMode(true); // Enable edit mode when file is clicked
  };

  const handleSaveFile = () => {
    // Save file content logic
    handleInsertNode(explorer.id, fileContent, false); // Assuming false means it's not a new folder
    setEditMode(false); // Exit edit mode after saving
  };

  const handleCancelEdit = () => {
    // Cancel edit mode
    setFileContent(explorer.content); // Reset to original content
    setEditMode(false);
  };

  const handleContentChange = (event) => {
    setFileContent(event.target.value); // Update file content as user types
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className={styles.folder} onClick={() => setExpand(!expand)}>
          <span
            onDrag={(e) => {
              console.log(e.target);
            }}
          >
            📁 {explorer.name}
          </span>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>
              📁 Folder +
            </button>
            <button onClick={(e) => handleNewFolder(e, false)}>
              📄 File +
            </button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className={styles.inputContainer}>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                className={styles.inputContainer__input}
                autoFocus
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.file}>
        {editMode ? (
          <div className={styles.editor}>
            <div className={styles.fileheader}>
              <h2>{explorer.name}</h2>
              <div className={styles.buttonContainer}>
                <button onClick={handleSaveFile}>💾 Save</button>
                <button onClick={handleCancelEdit}>❌ Cancel</button>
              </div>
            </div>
            <textarea
              className={styles.textarea}
              value={fileContent}
              onChange={handleContentChange}
            />
          </div>
        ) : (
          <span onClick={handleFileClick}>📄 {explorer.name}</span>
        )}
      </div>
    );
  }
}

export default Folder;
