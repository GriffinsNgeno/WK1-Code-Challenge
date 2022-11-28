    //  
    function speed(){
        const speed = prompt ("Enter Car Speed")
        if (speed <= 70){
            console.log ('Ok')
        } else if (speed - 70){
            const points = (speed -70) / 5
            if (points <= 12){
                console.log (`point:${points}`)
            } else {points > 12
                console.log ("License suspended")
            }
        }
        }
        speed()