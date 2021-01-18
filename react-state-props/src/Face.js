const Face = (props) => {
    return (
        <div>
            {
                props.counter < 1 ?
                '😢' 
                :
                '😁'
            }
        </div>
    )
}

export default Face