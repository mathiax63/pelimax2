const Administrador = (props) => {
    return (
        <div>
             <form class="formLogin"action="">
        <p class="pDelForm">
        <label class="labelDeLogin" for="">Email</label>
        <input type="email" name="Email" />
    </p>
    <p class="pDelForm">
        <label class="labelDeLogin" for="">Contraseña</label>
        <input type="password" name="contraseña" />
    </p>

    <button type="submit" class="btn-btn-primary">Ingresar</button>

    </form>
        </div>
    )
}
export default Administrador