package fr.cryptoconseils.api.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class Profil {

    @SerializedName("id")
    @Expose
    private Integer id;
    @SerializedName("username")
    @Expose
    private String username;
    @SerializedName("username_canonical")
    @Expose
    private String usernameCanonical;
    @SerializedName("email")
    @Expose
    private String email;
    @SerializedName("email_canonical")
    @Expose
    private String emailCanonical;
    @SerializedName("enabled")
    @Expose
    private Boolean enabled;
    @SerializedName("password")
    @Expose
    private String password;
    @SerializedName("groups")
    @Expose
    private List<Object> groups = null;
    @SerializedName("roles")
    @Expose
    private List<String> roles = null;
    @SerializedName("premium_level")
    @Expose
    private Integer premiumLevel;
    @SerializedName("is_email_validated")
    @Expose
    private boolean isEmailValidated;
    @SerializedName("image_id")
    @Expose
    private String imageId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsernameCanonical() {
        return usernameCanonical;
    }

    public void setUsernameCanonical(String usernameCanonical) {
        this.usernameCanonical = usernameCanonical;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailCanonical() {
        return emailCanonical;
    }

    public void setEmailCanonical(String emailCanonical) {
        this.emailCanonical = emailCanonical;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Object> getGroups() {
        return groups;
    }

    public void setGroups(List<Object> groups) {
        this.groups = groups;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public Integer getPremiumLevel() {
        return premiumLevel;
    }

    public void setPremiumLevel(Integer premiumLevel) {
        this.premiumLevel = premiumLevel;
    }

    public boolean getIsEmailValidated() {
        return isEmailValidated;
    }

    public void setIsEmailValidated(boolean isEmailValidated) {
        this.isEmailValidated = isEmailValidated;
    }

    public String getImageId() {
        return imageId;
    }

    public void setImageId(String imageId) {
        this.imageId = imageId;
    }
}