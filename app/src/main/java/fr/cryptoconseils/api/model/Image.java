package fr.cryptoconseils.api.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Image {

    @SerializedName("id")
    @Expose
    private Integer id;

    @SerializedName("file_extension")
    @Expose
    private String file_extension;

    @SerializedName("file_path")
    @Expose
    private String file_path;

    @SerializedName("file_name")
    @Expose
    private String file_name;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFileName() {
        return file_name;
    }

    public void setFileName(String url) {
        this.file_name = file_name;
    }


}
