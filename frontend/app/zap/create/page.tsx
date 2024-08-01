"use client";
import { BACKEND_URL } from "@/app/config";
import { Appbar } from "@/components/Appbar";
import { LinkButton } from "@/components/buttons/LinkButton";
import { ZapCell } from "@/components/Zapcell";
import axios from "axios";
import { useEffect, useState } from "react";

// function useAvailableActionsAndTriggers() {
//     const [availableActions, setAvailableActions] = useState([]);
//     const [availableTriggers, setAvailableTriggers] = useState([]);

//     useEffect(() => {
//         // const BACKEND_URL = `http://localhost:3001/api/v1`;
//         axios.get(`${BACKEND_URL}/trigger/available`)
//             .then(x => setAvailableTriggers(x.data.availableTriggers))

//         axios.get(`${BACKEND_URL}/api/v1/action/available`)
//             .then(x => setAvailableActions(x.data.availableActions))
//     }, [])

//     return {
//         availableActions,
//         availableTriggers
//     }
// }

export default function () {
    // const { availableActions, availableTriggers } = useAvailableActionsAndTriggers()
    const [selectedTrigger, setSelectedTrigger] = useState('')
    const [selectedAction, setSelectedAction] = useState<{
        availableActionId: number,
        availableActionName: string
    }[]>([])
    return <div>
        <Appbar />
        <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center">
            <div className="flex justify-center w-full">
                <ZapCell name={selectedTrigger ? selectedTrigger : "Trigger"} index={1} onClick={() => { }} />
            </div>
            <div className="flex flex-col items-center justify-center w-full pt-2 pb-2">
                {selectedAction.map((action, index) => <div className="pt-2"><ZapCell onClick={() => { }} name={action.availableActionName ? action.availableActionName : 'Action'} index={2+index} /></div>)}
            </div>
            <div className="flex justify-center">
                <LinkButton
                    onClick={() => {
                        setSelectedAction(a => [
                            ...a,
                            {
                                availableActionId: 0,
                                availableActionName: ''
                            }
                        ]);
                    }}
                >
                    <div className="text-2xl max-w-2 flex justify-center">
                        +
                    </div>
                </LinkButton>
            </div>

        </div>
    </div>
}