import {Component} from "react";
import './index.css';
export default class ChangePwd extends Component{
    render(){
        return(
<>
<div className="changepwd">
<b><div className="title-imps">Set New Password</div></b><br/>
<form>
<div class="row g-3 align-items-center">
<div class="col-auto">
<label for="inputPassword6" class="col-form-label">Login Pwd :</label>
</div>
<div class="col-auto">
<input type="password" id="inputPassword1" class="form-control" aria-describedby="passwordHelpInline" placeholder="type login password here"/>
</div></div><br/>

<div class="row g-3 align-items-center">
<div class="col-auto">
<label for="inputPassword6" class="col-form-label">Confirm Login Pwd :</label>
</div>
<div class="col-auto">
<input type="password" id="inputPassword2" class="form-control" aria-describedby="passwordHelpInline" placeholder="confirm login password here"/>
</div></div><br/>

<div class="row g-3 align-items-center">
<div class="col-auto">
<label for="inputPassword6" class="col-form-label">Transaction Pwd :</label>
</div>
<div class="col-auto">
<input type="password" id="inputPassword3" class="form-control" aria-describedby="passwordHelpInline" placeholder="type transaction password here"/>
</div></div><br/>

<div class="row g-3 align-items-center">
<div class="col-auto">
<label for="inputPassword6" class="col-form-label">Confirm Transaction Pwd :</label>
</div>
<div class="col-auto">
<input type="password" id="inputPassword4" class="form-control" aria-describedby="passwordHelpInline" placeholder="confirm transaction password here"/>
</div></div><br/>
<div><button type="submit" class="btn btn-success" id="changepwdbtn">Submit</button></div>
</form>
</div>
</>
        )
    }
}