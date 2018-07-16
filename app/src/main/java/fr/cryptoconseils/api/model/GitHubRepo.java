package fr.cryptoconseils.api.model;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.Date;

/**
 * Created by Alexandre.
 */

public class GitHubRepo implements Parcelable {

    private Integer id;
    private String title;
    private String author;
    private String content;
    private Date date;
    private Integer image_id;
    private Integer premium;
    private String cryptocurrencyPair;
    private String cryptocurrencyName;
    private String buyPrice;
    private String sellPrice;
    private String scoring;
    private String isCallFree;
    private Date beginDate;
    private Date endDate;
    private String type;
    private String isAirdropFree;
    private String reward;

    public Integer getId() {
        return id;
    }
    public String getTitle() {
       return title;
    }
    public String getAuthor() {
        return author;
    }
    public String getContent() {
        return content;
    }
    public Date getDate() {
        return date;
    }
    public Integer getImageId() {
        return image_id;
    }
    public Integer getPremium() {
        return premium;
    }
    public String getCryptocurrencyPair() {
        return cryptocurrencyPair;
    }
    public String getCryptocurrencyName() {
        return cryptocurrencyName;
    }
    public String getBuyPrice() {
        return buyPrice;
    }
    public String getSellPrice() {
        return sellPrice;
    }
    public String getScoring() {
        return scoring;
    }
    public String getIsCallFree() {
        return isCallFree;
    }
    public Date getBeginDate() {
        return beginDate;
    }
    public Date getEndDate() {
        return endDate;
    }
    public String getType() {
        return type;
    }
    public String getIsAirdropFree() {
        return isAirdropFree;
    }
    public String getReward() {
        return reward;
    }


    @Override
    public int describeContents() {
        //On renvoie 0, car notre classe ne contient pas de FileDescriptor
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        // On ajoute les objets dans l'ordre dans lequel on les a déclarés
        dest.writeInt(id);
        dest.writeString(title);
        dest.writeString(author);
        dest.writeString(content);
        dest.writeSerializable(date);

        if (image_id == null) {
            dest.writeInt(0);
        }
        else {
            dest.writeInt(1);
            dest.writeInt(image_id);
        }

        if (premium == null) {
            dest.writeInt(0);
        }
        else {
            dest.writeInt(1);
            dest.writeInt(premium);
        }

        dest.writeString(cryptocurrencyPair);
        dest.writeString(cryptocurrencyName);
        dest.writeString(buyPrice);
        dest.writeString(sellPrice);
        dest.writeString(scoring);
        dest.writeString(isCallFree);
        dest.writeSerializable(beginDate);
        dest.writeSerializable(endDate);
        dest.writeString(type);
        dest.writeString(isAirdropFree);
        dest.writeString(reward);
    }

    public static final Parcelable.Creator<GitHubRepo> CREATOR = new Parcelable.Creator<GitHubRepo>() {
        @Override
        public GitHubRepo createFromParcel(Parcel source) {
            return new GitHubRepo(source);
        }

        @Override
        public GitHubRepo[] newArray(int size) {
            return new GitHubRepo[size];
        }
    };

    public GitHubRepo(Parcel in) {
        id = in.readInt();
        title = in.readString();
        author = in.readString();
        content = in.readString();
        date = (java.util.Date) in.readSerializable();


        int hasId = in.readInt();

        if (hasId == 1) {
            image_id = in.readInt();
        }
        else {
            image_id = null;
        }

        int hasId2 = in.readInt();

        if (hasId2 == 1) {
            premium = in.readInt();
        }
        else {
            premium = null;
        }

        cryptocurrencyPair = in.readString();
        cryptocurrencyName = in.readString();
        buyPrice = in.readString();
        sellPrice = in.readString();
        scoring = in.readString();
        isCallFree = in.readString();
        beginDate = (java.util.Date) in.readSerializable();
        endDate = (java.util.Date) in.readSerializable();
        type = in.readString();
        isAirdropFree = in.readString();
        reward = in.readString();
    }
}