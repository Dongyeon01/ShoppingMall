import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

function LoginPage() {
    return(
        <Router>
            <div class="wrapper fadeInDown">
                <div id="formContent">
                    <form>
                        <input type="text" id="login" class="fadeIn second" name="id" placeholder="아이디를 입력하세요"/><br></br>
                        <input type="text" id="password" class="fadeIn third" name="pw" placeholder="비밀번호를 입력하세요"/><br></br>
                        <input rype="submit" class="fadeIn fourth" value="Log In"/>
                    </form>
                    <div id="formFooter">
                        <a class="underlineHover" to="/join">아직 회원이 아니신가요?</a>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default LoginPage;