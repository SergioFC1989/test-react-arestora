import React from "react";

import { ButtonNavigateMain } from "../ButtonNavigateMain/ButtonNavigateMain";
import { DataTable } from "../DataTable/DataTable";
import { TextLabel } from "../TextLabel/TextLabel";

import "./HeaderBarThread.scss";

/**
 * HeaderBarThread component renders a header bar with thread information.
 *
 * @param {Object} props - The component props.
 * @param {string} props.cfsCode - The CFS code of the thread.
 * @param {string} props.senderUser - The sender user of the thread.
 * @param {string} props.recipientAddress - The recipient address of the thread.
 * @param {Array} props.data - The data to be displayed in the DataTable.
 *
 * @returns {JSX.Element} The rendered HeaderBarThread component.
 */
export const HeaderBarThread = ({
  cfsCode,
  senderUser,
  recipientAddress,
  data,
}) => {
  return (
    <header className="header-bar">
      <div className="header-bar__title">
        <h3>INFORMACIÓN DEL HILO</h3>
        <ButtonNavigateMain color="primary" message="Volver al Inicio" />
      </div>
      <TextLabel label="CFS Code" message={cfsCode} />
      <TextLabel label="Emisor del hilo" message={senderUser} />
      <TextLabel label="Destinatario del hilo" message={recipientAddress} />
      <section>
        <DataTable data={data} titleTable="Histórico de estados" />
      </section>
    </header>
  );
};
