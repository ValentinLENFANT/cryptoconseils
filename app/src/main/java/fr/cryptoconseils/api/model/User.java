package fr.cryptoconseils.api.model;


import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class User {

    @SerializedName("email")
    @Expose
    private String email;
    @SerializedName("username")
    @Expose
    private String username;
    @SerializedName("password")
    @Expose
    private String password;
    @SerializedName("error")
    @Expose
    private String error;
    @SerializedName("is_email_validated")
    @Expose
    private Boolean isEmailValidated;

    public User(String email, String username, String password) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.error = getError();
        this.isEmailValidated = getIsEmailValidated();
    }

    public String getError() {
        return error;
    }
    public Boolean getIsEmailValidated() {
        return isEmailValidated;
    }

    public void setError(String error) {
        this.error = error;
    }

    public void setIsEmailValidated(Boolean isEmailValidated) {
        this.isEmailValidated = isEmailValidated;
    }

}
