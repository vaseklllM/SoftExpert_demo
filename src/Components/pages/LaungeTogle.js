import React from 'react'
import { connect } from 'react-redux'

function Launge({ ActiveLanguage, laungeSwitch, pageLoading }) {
    const arrLaungeName = ['eng', 'ua', 'rus']
    let Li = arrLaungeName.map(e => {
        return (
            <li
                key={e}
                className={e === ActiveLanguage ? 'Active' : ''}
                onClick={() => {
                    laungeSwitch(e)
                }}
            >{e}</li>
        )
    });

    return (
        <div
            className='LaungeAsign'
            style={{
                transform: !pageLoading ? 'translateY(0%)' : 'translateY(-1000%)',
                opacity: !pageLoading ? '1' : '0'
            }}
        >
            <ul>
                {Li}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ActiveLanguage: state.launge,
    pageLoading: state.pageLoading
})

const mapDispatchToProps = (dispatch) => {
    return {
        laungeSwitch: (launge) => {
            dispatch({ type: 'LAUNGE-SWITCH', launge })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Launge)