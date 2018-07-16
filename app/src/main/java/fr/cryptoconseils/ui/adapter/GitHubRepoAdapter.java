package fr.cryptoconseils.ui.adapter;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.squareup.picasso.Picasso;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.List;

import fr.cryptoconseils.R;
import fr.cryptoconseils.api.model.GitHubRepo;
import fr.cryptoconseils.api.model.Image;
import fr.cryptoconseils.api.service.GitHubClient;
import fr.cryptoconseils.ui.ArticleDetailsActivity;
import fr.cryptoconseils.ui.MainActivity;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by Alexandre.
 */

public class GitHubRepoAdapter extends ArrayAdapter<GitHubRepo> {

    private Context context;
    private List<GitHubRepo> values;

    public GitHubRepoAdapter(Context context, List<GitHubRepo> values) {
        super(context, R.layout.list_item_pagination, values);

        this.context = context;
        this.values = values;

    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View row = convertView;

        if (row == null) {
            LayoutInflater inflater =
                    (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            row = inflater.inflate(R.layout.list_item_pagination, parent, false);
        }

        // Retrofit Configuration
        Retrofit.Builder builder = new Retrofit.Builder()
                .baseUrl("http://90.90.185.202:8000/")
                .addConverterFactory(GsonConverterFactory.create());

        Retrofit retrofit = builder.build();
        GitHubClient client = retrofit.create(GitHubClient.class);
        // End Retrofit Configuration

        TextView textView = (TextView) row.findViewById(R.id.list_item_pagination_text);
        TextView author = (TextView) row.findViewById(R.id.list_item_pagination_author);
        TextView contentCall = (TextView) row.findViewById(R.id.contentCall);
        TextView scoringCall = (TextView) row.findViewById(R.id.scoringCall);
        TextView buyCall = (TextView) row.findViewById(R.id.buy_price);
        TextView sellCall = (TextView) row.findViewById(R.id.sell_price);
        TextView date = (TextView) row.findViewById(R.id.list_item_pagination_date);
        TextView contentAirdrop = (TextView) row.findViewById(R.id.contentAirdrop);
        TextView beginDate = (TextView) row.findViewById(R.id.begin_date);
        TextView endDate = (TextView) row.findViewById(R.id.end_date);
        TextView reward = (TextView) row.findViewById(R.id.reward);
        TextView target = (TextView) row.findViewById(R.id.target);

        final ImageView imageView = (ImageView) row.findViewById(R.id.imageView1);
        final ImageView imagePremium = (ImageView) row.findViewById(R.id.image_premium);
        final ImageView callPremium = (ImageView) row.findViewById(R.id.call_premium);
        final ImageView airdropPremium = (ImageView) row.findViewById(R.id.airdrop_premium);
        final LinearLayout blocCall = (LinearLayout) row.findViewById(R.id.bloc_call);
        final LinearLayout blocAirdrop = (LinearLayout) row.findViewById(R.id.bloc_airdrop);

        GitHubRepo item = values.get(position);

        if (item.getImageId() != null){

            blocCall.setVisibility(View.GONE);
            blocAirdrop.setVisibility(View.GONE);
            imageView.setVisibility(View.VISIBLE);

            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy 'à' HH'h' mm");
            String article_date = formatter.format(item.getDate());
            String article_author = item.getAuthor();
            String article_title = item.getTitle();
            Integer image_id = item.getImageId();
            Integer premium = item.getPremium();

            if (premium < 2){
                imagePremium.setImageResource(R.mipmap.ic_free_cryptoconseils);
            }else{
                imagePremium.setImageResource(R.mipmap.ic_premium_cryptoconseils);
            }

            // Call to api newest articles
            Call<Image> callMain = client.getImage(image_id);

            callMain.enqueue(new Callback<Image>() {
                @Override
                public void onResponse(Call<Image> callMain, Response<Image> response) {

                    String mUrl= "http://90.90.185.202/images/articles/" + response.body().getFileName();
                    Picasso.get().load(mUrl).into(imageView);
                }
                @Override
                public void onFailure(Call<Image> callMain, Throwable t) {
                }
            });
            // End of call

            textView.setText(article_title);
            author.setText("Par " + article_author + " le ");
            date.setText(article_date);
        }

        if (item.getBuyPrice() != null){

            imageView.setVisibility(View.GONE);
            blocAirdrop.setVisibility(View.GONE);
            blocCall.setVisibility(View.VISIBLE);
            String author_call = item.getAuthor();
            String cryptocurrency_pair = item.getCryptocurrencyPair();
            String cryptocurrency_name = item.getCryptocurrencyName();
            String buy_price = item.getBuyPrice();
            String sell_price = item.getSellPrice();
            String scoring = item.getScoring();
            String is_call_free = item.getIsCallFree();
            String content_call = item.getContent();
            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy 'à' HH'h' mm");
            String call_date = formatter.format(item.getDate());
            date.setText(call_date);
            content_call = content_call.substring(0,50) + "..." ;
            Float targetBuy;
            Float targetSell;
            try {
                targetBuy = Float.parseFloat(buy_price);
                targetSell = Float.parseFloat(sell_price);

                Float result = ((targetSell / targetBuy) * 100) - 100;
                Log.d("result", "" + result);

                target.setText("+" + result + " %");

            } catch(NumberFormatException nfe) {

            }

            textView.setText(cryptocurrency_name + " ( " + cryptocurrency_pair + " )");
            contentCall.setText(content_call);
            scoringCall.setText("Estimation de réussite : " + scoring + "%");
            buyCall.setText(buy_price + "$");
            sellCall.setText(sell_price + "$");
            //author.setText("Par " + author_call + " le ");
            //date.setText(call_date);

            if (is_call_free.equals("1")){
                callPremium.setImageResource(R.mipmap.ic_free_cryptoconseils);
            }else{
                callPremium.setImageResource(R.mipmap.ic_premium_cryptoconseils);
            }
        }

        if (item.getType() != null){

            imageView.setVisibility(View.GONE);
            blocCall.setVisibility(View.GONE);
            blocAirdrop.setVisibility(View.VISIBLE);
            String author_airdrop = item.getAuthor();
            String cryptocurrency_name = item.getCryptocurrencyName();
            String is_airdrop_free = item.getIsAirdropFree();
            String content_airdrop = item.getContent();
            String type_airdrop = item.getType();
            String reward_airdrop = item.getReward();

            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
            String begin_date = formatter.format(item.getBeginDate());
            String end_date = formatter.format(item.getEndDate());

            content_airdrop = content_airdrop.substring(0,50) + "..." ;

            textView.setText(cryptocurrency_name + " ( " + type_airdrop + " )");
            contentAirdrop.setText(content_airdrop);
            beginDate.setText(begin_date);
            endDate.setText(end_date);
            reward.setText("+" + reward_airdrop);

            if (is_airdrop_free.equals("1")){
                airdropPremium.setImageResource(R.mipmap.ic_free_cryptoconseils);
            }else{
                airdropPremium.setImageResource(R.mipmap.ic_premium_cryptoconseils);
            }
        }

        return row;
    }
}