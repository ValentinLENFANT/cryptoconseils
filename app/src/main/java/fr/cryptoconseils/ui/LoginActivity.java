package fr.cryptoconseils.ui;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.annotation.TargetApi;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.app.LoaderManager.LoaderCallbacks;
import android.content.CursorLoader;
import android.content.Loader;
import android.database.Cursor;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.inputmethod.EditorInfo;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import fr.cryptoconseils.R;
import fr.cryptoconseils.api.model.OauthResult;
import fr.cryptoconseils.api.model.Profil;
import fr.cryptoconseils.api.model.User;
import fr.cryptoconseils.api.service.GitHubClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * A login screen that offers login via username/password.
 * Created by Alexandre
 */

public class LoginActivity extends AppCompatActivity {

    // Retrofit Configuration
    Retrofit.Builder builder = new Retrofit.Builder()
            .baseUrl("http://90.90.185.202:8000/")
            .addConverterFactory(GsonConverterFactory.create());

    Retrofit retrofit = builder.build();
    GitHubClient client = retrofit.create(GitHubClient.class);

    private UserLoginTask mAuthTask = null;

    // UI references.
    private AutoCompleteTextView mUsernameView;
    private EditText mPasswordView;
    private View mProgressView;
    private View mLoginFormView;
    private TextView mInvalidCredentialsView;
    String  UserAccessToken;
    String  Username;
    boolean IsEmailValidated;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Toolbar toolbar = (Toolbar) findViewById(R.id.back_toolbar);
        toolbar.setNavigationIcon(R.drawable.ic_deconnexion);

        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        // Set up the login form.
        mUsernameView = (AutoCompleteTextView) findViewById(R.id.username);

        mPasswordView = (EditText) findViewById(R.id.password);
        mPasswordView.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            @Override
            public boolean onEditorAction(TextView textView, int id, KeyEvent keyEvent) {
                if (id == EditorInfo.IME_ACTION_DONE || id == EditorInfo.IME_NULL) {
                    attemptLogin();
                    return true;
                }
                return false;
            }
        });

        Button mUsernameSignInButton = (Button) findViewById(R.id.username_sign_in_button);
        mUsernameSignInButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                attemptLogin();
            }
        });

        TextView mRegister = (TextView) findViewById(R.id.register_button);
        mRegister.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), RegisterActivity.class);
                intent.setFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);
                startActivity(intent);
            }
        });

        mLoginFormView = findViewById(R.id.login_form);
        mProgressView = findViewById(R.id.login_progress);
    }


    /**
     * Attempts to sign in or register the account specified by the login form.
     * If there are form errors (invalid email, missing fields, etc.), the
     * errors are presented and no actual login attempt is made.
     */
    private void attemptLogin() {
        if (mAuthTask != null) {
            return;
        }

        // Reset errors.
        mUsernameView.setError(null);
        mPasswordView.setError(null);

        // Store values at the time of the login attempt.
        String username = mUsernameView.getText().toString();
        String password = mPasswordView.getText().toString();

        Username = username;

        boolean cancel = false;
        View focusView = null;

        // Check for a valid email address.
        if (TextUtils.isEmpty(username)) {
            mUsernameView.setError(getString(R.string.error_field_required));
            focusView = mUsernameView;
            cancel = true;
        }

        // Check for a valid password .
        if (TextUtils.isEmpty(password)) {
            mPasswordView.setError(getString(R.string.error_field_required));
            focusView = mPasswordView;
            cancel = true;
        }

        if (cancel) {
            // There was an error; don't attempt login and focus the first
            // form field with an error.
            focusView.requestFocus();
        } else {
            // Show a progress spinner, and kick off a background task to
            // perform the user login attempt.
            showProgress(true);

            Call<OauthResult> callOauth2 = client.call0auth2("password", "1_3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4", "4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k", username, password);

            callOauth2.enqueue(new Callback<OauthResult>() {

                @Override
                public void onResponse(Call<OauthResult> callOauth2, Response<OauthResult> response) {
                    //response.body(); // have your all data

                    if (response.code() == 400) {
                        Gson gson = new GsonBuilder().create();
                        OauthResult mError= new OauthResult();
                        try {
                            mError= gson.fromJson(response.errorBody().string(), OauthResult.class);
                            Log.d("Error:", mError.getError());
                            mAuthTask = new UserLoginTask(false);
                            mAuthTask.execute((Void) null);
                        } catch (IOException e) {
                            // handle failure to read error
                        }
                    }else{
                        String access_token = response.body().getAccessToken();
                        mAuthTask = new UserLoginTask(true);
                        mAuthTask.execute((Void) null);
                        UserAccessToken = access_token;
                    }
                }

                @Override
                public void onFailure(Call<OauthResult> callOauth2, Throwable t) {
                }
            });
        }
    }


    /**
     * Shows the progress UI and hides the login form.
     */
    @TargetApi(Build.VERSION_CODES.HONEYCOMB_MR2)
    private void showProgress(final boolean show) {
        // On Honeycomb MR2 we have the ViewPropertyAnimator APIs, which allow
        // for very easy animations. If available, use these APIs to fade-in
        // the progress spinner.
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB_MR2) {
            int shortAnimTime = getResources().getInteger(android.R.integer.config_shortAnimTime);

            mLoginFormView.setVisibility(show ? View.GONE : View.VISIBLE);
            mLoginFormView.animate().setDuration(shortAnimTime).alpha(
                    show ? 0 : 1).setListener(new AnimatorListenerAdapter() {
                @Override
                public void onAnimationEnd(Animator animation) {
                    mLoginFormView.setVisibility(show ? View.GONE : View.VISIBLE);
                }
            });

            mProgressView.setVisibility(show ? View.VISIBLE : View.GONE);
            mProgressView.animate().setDuration(shortAnimTime).alpha(
                    show ? 1 : 0).setListener(new AnimatorListenerAdapter() {
                @Override
                public void onAnimationEnd(Animator animation) {
                    mProgressView.setVisibility(show ? View.VISIBLE : View.GONE);
                }
            });
        } else {
            // The ViewPropertyAnimator APIs are not available, so simply show
            // and hide the relevant UI components.
            mProgressView.setVisibility(show ? View.VISIBLE : View.GONE);
            mLoginFormView.setVisibility(show ? View.GONE : View.VISIBLE);
        }
    }


    /**
     * Represents an asynchronous login/registration task used to authenticate
     * the user.
     */
    public class UserLoginTask extends AsyncTask<Void, Void, Boolean> {

        private final Boolean mSuccess;


        UserLoginTask(final Boolean success) {

            mSuccess = success;

        }

        @Override
        protected Boolean doInBackground(Void... params) {
            // TODO: attempt authentication against a network service.

            try {
                // Simulate network access.
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                return false;
            }

            // TODO: register the new account here.
            return true;
        }

        @Override
        protected void onPostExecute(Boolean success) {
            mAuthTask = null;
            showProgress(false);

            if (mSuccess) {

                String mAccessToken = "Bearer " + UserAccessToken;


                Call<Profil> callIsEmailValidated = client.isEmailValidated(Username, mAccessToken);
                callIsEmailValidated.enqueue(new Callback<Profil>() {

                    @Override
                    public void onResponse(Call<Profil> callIsEmailValidated, Response<Profil> response) {

                        IsEmailValidated = response.body().getIsEmailValidated();


                        if (IsEmailValidated){
                            finish();
                            Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                            intent.putExtra("AccessToken", UserAccessToken);
                            intent.putExtra("Username", Username);
                            startActivity(intent);
                        }else{
                            finish();
                            Intent intent = new Intent(getApplicationContext(), LoginActivity.class);
                            startActivity(intent);
                            Toast.makeText(getBaseContext(), "Votre compte n'a pas été vérifié, veuillez confimer votre compte dans le mail que nous avons envoyé",Toast.LENGTH_LONG).show();
                        }
                    }

                    @Override
                    public void onFailure(Call<Profil> callIsEmailValidated, Throwable t) {
                    }
                });


            } else {
                Toast.makeText(getBaseContext(), "Identifiant ou mot de passe invalide, veuillez réessayer",Toast.LENGTH_LONG).show();
            }
        }

        @Override
        protected void onCancelled() {
            mAuthTask = null;
            showProgress(false);
        }
    }
}