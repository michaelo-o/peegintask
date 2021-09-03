import { useEffect, useState } from "react";



const HowToUse = (props) => {
    const toggleuse = props.toggleuse
    const settoggleuse = props.settoggleuse
    // const [toggleuse, settoggleuse] = useState(false)


    const useButton = () => {
        settoggleuse(!toggleuse);
    };

    return (
        <>
        
            <div className="addNewWord">
                <button onClick={useButton}>
                    <h3>How To Use</h3>
                </button>
            </div>
        </>
    );
}

export default HowToUse;