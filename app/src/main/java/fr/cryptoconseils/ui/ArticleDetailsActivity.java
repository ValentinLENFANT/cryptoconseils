package fr.cryptoconseils.ui;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.text.SimpleDateFormat;
import fr.cryptoconseils.R;
import fr.cryptoconseils.api.model.GitHubRepo;
import fr.cryptoconseils.api.model.Image;
import fr.cryptoconseils.api.service.GitHubClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ArticleDetailsActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_article_details);

        Toolbar toolbar = (Toolbar) findViewById(R.id.back_toolbar);
        toolbar.setNavigationIcon(R.drawable.ic_deconnexion);

        toolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        // Retrofit Configuration
        Retrofit.Builder builder = new Retrofit.Builder()
                .baseUrl("http://90.90.185.202:8000/")
                .addConverterFactory(GsonConverterFactory.create());

        Retrofit retrofit = builder.build();
        GitHubClient client = retrofit.create(GitHubClient.class);
        // End Retrofit Configuration

        // On récupère l'objet Article envoyé dans le MainActivity
        GitHubRepo Article = getIntent().getParcelableExtra("ArticleDetails");

        TextView title = (TextView) findViewById(R.id.article_title);
        TextView author = (TextView) findViewById(R.id.article_author);
        TextView contentCall = (TextView) findViewById(R.id.contentCall);
        TextView scoringCall = (TextView) findViewById(R.id.scoringCall);
        TextView buyCall = (TextView) findViewById(R.id.buy_price);
        TextView sellCall = (TextView) findViewById(R.id.sell_price);
        TextView content = (TextView) findViewById(R.id.article_content);
        TextView contentAirdrop = (TextView) findViewById(R.id.contentAirdrop);
        final ImageView imageView = (ImageView) findViewById(R.id.image_article);
        final ImageView imagePremium = (ImageView) findViewById(R.id.image_premium);
        final LinearLayout blocCall = (LinearLayout) findViewById(R.id.bloc_call);
        final LinearLayout blocAirdrop = (LinearLayout) findViewById(R.id.bloc_airdrop);
        final ImageView airdropPremium = (ImageView) findViewById(R.id.airdrop_premium);
        final ImageView callPremium = (ImageView) findViewById(R.id.call_premium);
        TextView date = (TextView) findViewById(R.id.article_date);
        TextView beginDate = (TextView) findViewById(R.id.begin_date);
        TextView endDate = (TextView) findViewById(R.id.end_date);
        TextView reward = (TextView) findViewById(R.id.reward);
        TextView target = (TextView) findViewById(R.id.target);

        if (Article.getImageId() != null) {

            blocCall.setVisibility(View.GONE);
            blocAirdrop.setVisibility(View.GONE);
            imageView.setVisibility(View.VISIBLE);
            String article_title = Article.getTitle();
            String article_content = Article.getContent();
            String article_author = Article.getAuthor();
            Integer image_id = Article.getImageId();
            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy 'à' HH'h' mm");
            String article_date = formatter.format(Article.getDate());

            Integer premium = Article.getPremium();

            if (premium < 2) {
                imagePremium.setImageResource(R.mipmap.ic_free_cryptoconseils);
            } else {
                imagePremium.setImageResource(R.mipmap.ic_premium_cryptoconseils);
            }

            // Call to api newest articles
            Call<Image> callMain = client.getImage(image_id);

            callMain.enqueue(new Callback<Image>() {
                @Override
                public void onResponse(Call<Image> callMain, Response<Image> response) {
                    String mUrl = "http://90.90.185.202/images/articles/" + response.body().getFileName();
                    Picasso.get().load(mUrl).into(imageView);
                }

                @Override
                public void onFailure(Call<Image> callMain, Throwable t) {
                }
            });
            // End of call

            title.setText(article_title);
            author.setText("Publié par " + article_author + " le ");
            content.setText(article_content);
            date.setText(article_date);
        }


        if (Article.getBuyPrice() != null){

            imageView.setVisibility(View.GONE);
            blocAirdrop.setVisibility(View.GONE);
            blocCall.setVisibility(View.VISIBLE);
            String author_call = Article.getAuthor();
            String cryptocurrency_pair = Article.getCryptocurrencyPair();
            String cryptocurrency_name = Article.getCryptocurrencyName();
            String buy_price = Article.getBuyPrice();
            String sell_price = Article.getSellPrice();
            String scoring = Article.getScoring();
            String is_call_free = Article.getIsCallFree();
            String content_call = Article.getContent();
            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy 'à' HH'h' mm");
            String call_date = formatter.format(Article.getDate());

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


            title.setText(cryptocurrency_name + " ( " + cryptocurrency_pair + " )");
            contentCall.setText(content_call);
            scoringCall.setText("Estimation de réussite : " + scoring + "%");
            buyCall.setText(buy_price + "$");
            sellCall.setText(sell_price + "$");
            author.setText("Par " + author_call + " le ");
            date.setText(call_date);

            if (is_call_free.equals("1")){
                callPremium.setImageResource(R.mipmap.ic_free_cryptoconseils);
            }else{
                callPremium.setImageResource(R.mipmap.ic_premium_cryptoconseils);
            }
        }


        if (Article.getType() != null){

            imageView.setVisibility(View.GONE);
            blocCall.setVisibility(View.GONE);
            blocAirdrop.setVisibility(View.VISIBLE);
            String author_airdrop = Article.getAuthor();
            String cryptocurrency_name = Article.getCryptocurrencyName();
            String is_airdrop_free = Article.getIsAirdropFree();
            String content_airdrop = Article.getContent();
            String type_airdrop = Article.getType();
            String reward_airdrop = Article.getReward();

            SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
            String begin_date = formatter.format(Article.getBeginDate());
            String end_date = formatter.format(Article.getEndDate());


            //content_airdrop = content_airdrop.substring(0,50) + "..." ;

            title.setText(cryptocurrency_name + " ( " + type_airdrop + " )");
            contentAirdrop.setText(content_airdrop);
            author.setText("Par " + author_airdrop);
            beginDate.setText(begin_date);
            endDate.setText(end_date);
            reward.setText("+" + reward_airdrop);

            if (is_airdrop_free.equals("1")){
                airdropPremium.setImageResource(R.mipmap.ic_free_cryptoconseils);
            }else{
                airdropPremium.setImageResource(R.mipmap.ic_premium_cryptoconseils);
            }
        }

    }
}
