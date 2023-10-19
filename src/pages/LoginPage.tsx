import { MDTVInput } from "../components/Inputs/MDTVInput";
import { MDTVButton } from "../components/Buttons/MDTVButton";
import "./LoginPage.scss";

export const LoginPage = () => {
  // const onClick = () => {
  //   console.log("pepe");
  // };

  return (
    <>
      <section className="login-section">
        <div className="login-title">
          <h1>Ingresar a MIDIRECTV</h1>
          <p>Gestiona tu cuenta de manera fácil y segura.</p>
        </div>
        <form action="" className="login-form">
          <div className="login-container">
            <div className="login-inputs">
              <MDTVInput
                label="E-mail"
                type="text"
                id="email"
                name="email"
                error="Requerido"
                idDisabled={false}
              />
              {/* <MDTVButton
              label="¿Olvidaste tu contraseña?"
              isLoading={false}
              isDisabled={false}
              isLink={true}
              className="link"
              onClick={onClick}
            /> */}
              <MDTVInput
                label="Contraseña"
                type="password"
                id="password"
                name="password"
                error=""
                idDisabled={false}
              />
            </div>

            <div className="login-btn">
              <MDTVButton
                label="Ingresar"
                isLoading={false}
                isDisabled={false}
                className="primary-blue"
                // onClick={onClick}
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
