/**
 * Created by pratik on 23/3/16.
 */
import{Injectable}   from 'angular2/core';
import { Http, HTTP_PROVIDERS,Response} from 'angular2/http';

@Injectable()
/**
 * Class to validates user credentials
 */
export class LoginService{


    constructor(private _http : Http){}

    /**
     *  TODO : using a local service call>..
     * @param username
     * @param password
     */
    validateUserHttp(username : string,password : string,parentRef : any){

        let URL = '';
        this._http.get(URL)
            .map(res =>res.json())
            .subscribe(
                data => {
                    // Map result
                },
                err => {
                    console.log("catch ex");
                },
                () => {
                    // On Complete Route directly from here!!

                    if(loginValid){
                        parentRef._router.navigate(['Dash']);
                    }
                    else
                        parentRef.loginFailedMessage = '';

                }
            );
    }

    /**
     * Validating user from Firebase service
     * @param username
     * @param password
     * @param parentRef
     */
    validateUserFireBase(username : string,password : string,parentRef : any){

        let URL = 'https://dazzling-inferno-3277.firebaseio.com/'+username;
        this.ref = new Firebase(URL);

        var password = password;
        this.ref.on("value", function(snapshot){
            if(snapshot.val()!==null)
            {
                var tabval = snapshot.val();
                //console.log('Entered password '+password+ ' Firebase Returned'+tabval.password)

                if(password==tabval.password){
                    //route here
                    localStorage.setItem('user',tabval.fullname);
                    parentRef._router.navigate(['Dash']);
                    //parentRef.stopLoading = true;
                }
                else{
                    parentRef.loginFailedMessage = ' Invalid Credentials!';
                    //console.log("fail invalid");
                    //parentRef.stopLoading = true;
                }

            }
            else{
               parentRef.loginFailedMessage = 'User does not exist';
                //console.log("fail not found")
                //parentRef.stopLoading = true;
            }
        });

    }
}
