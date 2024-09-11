import React from "react";

import { DataTable } from "../DataTable/DataTable";
import { TextLabel } from "../TextLabel/TextLabel";
import "./HeaderBarCFS.scss";
import { ButtonNavigateMain } from "../ButtonNavigateMain/ButtonNavigateMain";

export const HeaderBarCFS = ({
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
