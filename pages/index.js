import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import explorer from "./data/folderData";
import Folder from "../components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import styles from "../styles/Home.module.css";

export default function app() {
  const [explorerData, setexplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder, content) => {
    const finalTree = insertNode(
      explorerData,
      folderId,
      item,
      isFolder,
      content
    );

    setexplorerData(finalTree);
  };

  return (
    <div className={styles.App}>
      <Head>
        <title>MY IDE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Header}>
        <Header />
      </div>

      <div className={styles.container}>
        <div className={styles.Sidebar}>
          <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
        </div>
      </div>
    </div>
  );
}
