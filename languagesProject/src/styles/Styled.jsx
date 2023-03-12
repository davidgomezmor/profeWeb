import React from 'react'
import styled from 'styled-components'

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const StyledCalendar = styled(ReactCalendar)`
  max-width: 600px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`
