import React from "react"
import { LanguageConsumer } from "../softExpert-context"

const hocLaungeConsumer = Wraped => props => {
    return (
        <LanguageConsumer>
            {launge => {
                return <Wraped {...props} launge={launge} />
            }}
        </LanguageConsumer>
    )
}
export default hocLaungeConsumer
