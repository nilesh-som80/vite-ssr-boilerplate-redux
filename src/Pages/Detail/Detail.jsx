import { Container } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/hooks";

export default function Detail() {
    const {name} = useAppSelector(state=>state.app)
    return <Container>Detail {name}</Container>;
}
