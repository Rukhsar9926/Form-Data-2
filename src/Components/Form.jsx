import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {

    const [inputs, setInputs] = useState({

        FirstInput: '',
        SecondInput: '',
        ThirdInput: '',
        FourthInput: '',
        FifthInput: '',
        SixthInput: '',
    });


    const [display, setDisplay] = useState("");
    const [list, setlist] = useState([]);

    const navigate = useNavigate();
    

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value,);

        const updatedInput={[name]:value};
        console.log(updatedInput,"hello")
        
        setInputs(values =>
            ({ ...values,...updatedInput }))
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputs, "hello")

        setDisplay(inputs);
        setInputs({
            FirstInput: '',
            SecondInput: '',
            ThirdInput: '',
            FourthInput: '',
            FifthInput: '',
            SixthInput: '',
        })

        navigate('/resume', { state: inputs });
        setlist((previouslist)=>[...previouslist,inputs])
     


    }

    
    
const listdata=(e)=>{
    console.log("-inputs---",inputs)

    // const formattedList = Object.keys(inputs).map((key) => ({
    //     [key]: inputs[key],
    // }));
    // console.log(formattedList,"list");
   

        navigate('/registerUsers', { state:inputs });
  console.log("----------------") 
}
       
   



    return (
        <>
            <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                <div class="col-md-4 position-relative">
                    <label for="validationTooltip01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationTooltip01" required name="FirstInput" value={inputs.FirstInput} onChange={handleChange} />
                    <div class="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4 position-relative">



                    <label for="validationTooltip02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationTooltip02" required name="SecondInput" onChange={handleChange} value={inputs.SecondInput} />
                    <div class="valid-tooltip">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4 position-relative">
                    <label for="validationTooltipUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required name="ThirdInput" onChange={handleChange} value={inputs.ThirdInput} />
                        <div class="invalid-tooltip">
                            Please choose a unique and valid username.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip03" class="form-label">City</label>
                    <input type="text" class="form-control" id="validationTooltip03" name="FourthInput" required onChange={handleChange} value={inputs.FourthInput} />
                    <div class="invalid-tooltip">
                        Please provide a valid city.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="validationTooltip04" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="validationTooltip04" aria-describedby="emailHelp" name="FifthInput" onChange={handleChange} value={inputs.FifthInput} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>


                <div class="mb-3">
                    <label for="validationTooltip05" class="form-label">Password</label>
                    <input type="text" class="form-control" id="validationTooltip05" required name="SixthInput" onChange={handleChange} value={inputs.SixthInput} />

                </div>


                <div class="col-12">
                    <button class="btn btn-primary" type="submit"  >Submit form </button>
                </div>
            </form>

            <div class="d-grid gap-2">
                <button class="btn btn-dark mt-5" type="button" onClick={listdata}> Disply The List OF Registered Users</button>
            </div>







        </>
    )
}
