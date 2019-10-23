import ClicksResult from "./ClicksResult"
import ClickMe from "./ClickMe"
import ClickContextProvider from "../contexts/ClickContext"
import React from "react"
import { SectionWrapper } from "../App"
import HeaderText from "../styledComponents/HeaderText"

const ClicksCounterSection = () => {
  return (
    <SectionWrapper>
      <ClickContextProvider>
        <HeaderText>Clicks counter</HeaderText>
        <ClicksResult />
        <ClickMe />
      </ClickContextProvider>
    </SectionWrapper>
  )
}

export default ClicksCounterSection
