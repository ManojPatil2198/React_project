
import style from './style/UserProfile-Module.css?module';
function UserProfile() {

    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div className={style.card}>
                <img className={style.img} alt="User avatar" src="https://www.w3schools.com/howto/img_avatar.png" />
                <div>
                    <h4>Manoj Patil</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )

}
export default UserProfile;