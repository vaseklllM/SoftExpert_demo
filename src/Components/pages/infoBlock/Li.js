import React from "react"
import Active from "./img/Active.svg"
import DontActive from "./img/dontActive.svg"

const liWrapper = items => {
    return (
        <>
            <span className='technologies-technology-list-name'>
                {items.Name}
            </span>
            <span className='technologies-technology-list-state'>
                <img
                    src={items.State ? Active : DontActive}
                    alt={items.State ? "true" : "false"}
                />
            </span>
        </>
    )
}
export default liWrapper
