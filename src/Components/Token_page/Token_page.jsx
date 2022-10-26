import React from 'react'
import Token_header from "../Token_header/Token_header"
import Token_main from "../Token_main/Token_main"

import Token_steps from "../Token_steps/Token_steps"
import Token_ut from "../Token_ut/Token_ut"
import Token_footer from "../Token_footer/Token_footer"
function Token_page({address,setAddress}) {
  return (
    <div>
        <Token_header setAddress={setAddress}/>
      <Token_main address={address}/>
      <Token_steps/>
      <Token_ut/>
      {/* <Token_footer/> */}
    </div>
  )
}

export default Token_page
