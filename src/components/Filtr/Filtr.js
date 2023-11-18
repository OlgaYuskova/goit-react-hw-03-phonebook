import React from "react";
import { nanoid } from 'nanoid'
import { Filtrs, FiltrsLabel } from "./Filtr.styled";

const inputSearchId = nanoid()

const Filtr = ({ filter, onChange }) => (

<FiltrsLabel htmlFor={inputSearchId}>Search
<Filtrs id={inputSearchId} type="text" value={filter} onChange={onChange} name="search" placeholder="Search" />
</FiltrsLabel>

)


export default Filtr;
