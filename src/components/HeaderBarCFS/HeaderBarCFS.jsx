import React from "react";

import { DataTable } from "../DataTable/DataTable";
import { TextLabel } from "../TextLabel/TextLabel";
import "./HeaderBarCFS.scss";

export const HeaderBarCFS = ({
  cfsCode,
  senderUser,
  recipientAddress,
  data,
}) => (
  <header className="header-bar">
    <TextLabel label="CFS Code" message={cfsCode} />
    <TextLabel label="Emisor del hilo" message={senderUser} />
    <TextLabel label="Destinatario del hilo" message={recipientAddress} />
    <section>
      <DataTable data={data} titleTable="Histórico de estados" />
    </section>
  </header>
);
