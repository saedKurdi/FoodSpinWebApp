import { ChangeEvent, useEffect, useState } from "react";
import {
  CloseWindow,
  RegisterEditExitButton,
  RegisterEditExitButtons,
  RegisterEditExitInput,
  RegisterEditExitModule,
  RegisterEditExitWindow,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentAccount } from "../../redux/features/Account/accountSelector";
import {
  setCurrentAccount,
  setSignInSelected,
} from "../../redux/features/Account/accountSlice";

export default function RegisterEditExit() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  const account = useSelector(getCurrentAccount);

  const getDataToStateIfAccountExsists = () => {
    if (account) {
      setName(account.name);
      setUsername(account.username);
      setPassword(account.password);
      setEmail(account.email);
    }
  };

  useEffect(() => {
    getDataToStateIfAccountExsists();
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
    }
  };

  const clearForm = () => {
    setName("");
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <RegisterEditExitModule>
      <RegisterEditExitWindow>
        <RegisterEditExitInput
          name="name"
          onChange={handleOnChange}
          value={name}
          type="text"
          placeholder="Name"
        />
        <RegisterEditExitInput
          name="username"
          onChange={handleOnChange}
          value={username}
          type="text"
          placeholder="Username"
        />
        <RegisterEditExitInput
          name="password"
          onChange={handleOnChange}
          value={password}
          type="password"
          placeholder="Password"
        />
        <RegisterEditExitInput
          name="email"
          onChange={handleOnChange}
          value={email}
          type="email"
          placeholder="Email"
        />
        <RegisterEditExitButtons>
          <RegisterEditExitButton
            onClick={() =>
              dispatch(
                setCurrentAccount({
                  name: name,
                  username: username,
                  password: password,
                  email: email,
                })
              )
            }
          >
            {account ? "Save" : "Register"}
          </RegisterEditExitButton>
          {account && (
            <RegisterEditExitButton
              onClick={() => {
                dispatch(setCurrentAccount(null));
                clearForm();
              }}
            >
              Exit
            </RegisterEditExitButton>
          )}
        </RegisterEditExitButtons>
        <CloseWindow
          onClick={() => dispatch(setSignInSelected(false))}
          className="fa-solid fa-circle-xmark"
        ></CloseWindow>
      </RegisterEditExitWindow>
    </RegisterEditExitModule>
  );
}
