import Modal from 'react-modal'

const OptionModal =(props)=>(
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.onClearModal}
            contentLabel={'Selected Option'}
            closeTimeoutMS={200}
            className="modal"
        >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={ props.onClearModal }>Clear</button>
        </Modal>
    </div>
)

export default OptionModal