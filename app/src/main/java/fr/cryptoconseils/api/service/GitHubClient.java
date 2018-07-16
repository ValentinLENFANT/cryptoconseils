package fr.cryptoconseils.api.service;

import java.util.List;

import fr.cryptoconseils.api.model.GitHubRepo;
import fr.cryptoconseils.api.model.OauthResult;
import fr.cryptoconseils.api.model.Profil;
import fr.cryptoconseils.api.model.User;
import fr.cryptoconseils.api.model.Image;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Path;

/**
 * Created by Alexandre on 01/07/18.
 */

public interface GitHubClient {

    @GET("/articles/category/{user}")
    Call<List<GitHubRepo>> reposForUser(@Path("user") Integer user, @Header("Authorization") String authorization);

    @GET("/call/all/")
    Call<List<GitHubRepo>> ourCalls(@Header("Authorization") String authorization);

    @GET("/airdrop/all/")
    Call<List<GitHubRepo>> ourAirdrops(@Header("Authorization") String authorization);

    @GET("/articles")
    Call<List<GitHubRepo>> allArticles(@Header("Authorization") String authorization);

    @GET("/articles/newest/3")
    Call<List<GitHubRepo>> newestArticles(@Header("Authorization") String authorization);

    @FormUrlEncoded
    @POST("/oauth/v2/token")
    Call<OauthResult> call0auth2(@Field("grant_type") String grant, @Field("client_id") String client_id, @Field("client_secret") String client_secret, @Field("username") String username, @Field("password") String password);

    @POST("/users/new/")
    Call<User> createUser(@Body User user);

    @GET("/images/{id}")
    Call<Image> getImage(@Path("id") Integer id);

    @GET("/users/{username}")
    Call<Profil> isEmailValidated(@Path("username") String username, @Header("Authorization") String authorization);
}
