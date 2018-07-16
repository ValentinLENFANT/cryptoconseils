package fr.cryptoconseils.ui;

        import android.content.Intent;
        import android.content.SharedPreferences;
        import android.graphics.Bitmap;
        import android.graphics.BitmapFactory;
        import android.net.Uri;
        import android.os.AsyncTask;
        import android.os.Bundle;
        import android.support.design.widget.NavigationView;
        import android.support.v4.view.GravityCompat;
        import android.support.v4.widget.DrawerLayout;
        import android.support.v4.widget.NestedScrollView;
        import android.support.v7.app.ActionBar;
        import android.support.v7.app.AppCompatActivity;
        import android.support.v7.widget.Toolbar;
        import android.text.Html;
        import android.text.method.LinkMovementMethod;
        import android.util.Log;
        import android.view.Menu;
        import android.view.MenuInflater;
        import android.view.MenuItem;
        import android.view.View;
        import android.view.ViewGroup;
        import android.webkit.WebView;
        import android.widget.AdapterView;
        import android.widget.ImageView;
        import android.widget.LinearLayout;
        import android.widget.ListAdapter;
        import android.widget.ListView;
        import android.widget.MediaController;
        import android.widget.TextView;
        import android.widget.Toast;
        import android.widget.VideoView;

        import com.google.gson.Gson;
        import com.google.gson.GsonBuilder;
        import com.squareup.picasso.Picasso;

        import java.io.IOException;
        import java.io.InputStream;
        import java.util.List;
        import fr.cryptoconseils.R;
        import fr.cryptoconseils.api.model.GitHubRepo;
        import fr.cryptoconseils.api.model.OauthResult;
        import fr.cryptoconseils.api.service.GitHubClient;
        import fr.cryptoconseils.ui.adapter.GitHubRepoAdapter;
        import retrofit2.Call;
        import retrofit2.Callback;
        import retrofit2.Response;
        import retrofit2.Retrofit;
        import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity{

    private ListView listView;
    private DrawerLayout mDrawerLayout;
    String UserAccessToken = "";
    String Username = "";
    Boolean userRegistered = false;

    // Shared preferences
    private static final String PREFS = "PREFS";
    private static final String PREFS_ACCESS_TOKEN = "PREFS_ACCESS_TOKEN";
    private static final String PREFS_USERNAME = "PREFS_USERNAME";
    SharedPreferences sharedPreferences;
    // End shared preferences

    // Retrofit Configuration
    Retrofit.Builder builder = new Retrofit.Builder()
            .baseUrl("http://90.90.185.202:8000/")
            .addConverterFactory(GsonConverterFactory.create());

    Retrofit retrofit = builder.build();
    GitHubClient client = retrofit.create(GitHubClient.class);
    // End Retrofit Configuration

    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Toolbar navigation Configuration
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        ActionBar actionbar = getSupportActionBar();
        actionbar.setDisplayHomeAsUpEnabled(true);
        actionbar.setHomeAsUpIndicator(R.drawable.ic_navigation_menu);
        mDrawerLayout = findViewById(R.id.drawer_layout);
        NavigationView navigationHeaderView = (NavigationView) findViewById(R.id.nav_view);
        View headerView = navigationHeaderView.getHeaderView(0);
        final TextView headerText = (TextView) headerView.findViewById(R.id.username_header);
        getSupportActionBar().setLogo(R.mipmap.ic_logo_cryptoconseils);
        getSupportActionBar().setDisplayUseLogoEnabled(true);
        // End Toolbar navigation Configuration

        //LAYOUT BLOCS
        final TextView main_title_part_1 = (TextView)findViewById(R.id.main_title_part_1);
        final TextView main_title_part_2 = (TextView)findViewById(R.id.main_title_part_2);
        final TextView main_sub_title = (TextView)findViewById(R.id.main_sub_title);
        final View line_sub_title = (View) findViewById(R.id.line_sub_title);
        final LinearLayout next_main_content = (LinearLayout) findViewById(R.id.next_main_content);
        final LinearLayout bloc_expert = (LinearLayout) findViewById(R.id.bloc_expert);
        final LinearLayout bloc_premium = (LinearLayout) findViewById(R.id.bloc_premium);
        final NestedScrollView sv = (NestedScrollView) findViewById(R.id.sv);
        //LAYOUT BLOCS


        TextView ButtonPackDebutant = (TextView) findViewById(R.id.button_pack_debutant);
        TextView ButtonPackAvance = (TextView) findViewById(R.id.button_pack_avance);
        TextView ButtonPackExpert = (TextView) findViewById(R.id.button_pack_expert);
        TextView ButtonPackLambo = (TextView) findViewById(R.id.button_pack_lambo);

        TextView ButtonPackDebutant2 = (TextView) findViewById(R.id.button_pack_debutant2);
        TextView ButtonPackAvance2 = (TextView) findViewById(R.id.button_pack_avance2);
        TextView ButtonPackExpert2 = (TextView) findViewById(R.id.button_pack_expert2);
        TextView ButtonPackLambo2 = (TextView) findViewById(R.id.button_pack_lambo2);


       /* ButtonPackDebutant.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/11?id=11&amount=100"));
                startActivity(intent);
            }
        });

        ButtonPackAvance.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/12?id=12&amount=300"));
                startActivity(intent);
            }
        });

        ButtonPackExpert.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/11?id=11&amount=500"));
                startActivity(intent);
            }
        });

        ButtonPackLambo.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/11?id=11&amount=1000"));
                startActivity(intent);
            }
        });

        ButtonPackDebutant2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/11?id=11&amount=100"));
                startActivity(intent);
            }
        });

        ButtonPackAvance2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/12?id=12&amount=300"));
                startActivity(intent);
            }
        });

        ButtonPackExpert2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/11?id=11&amount=500"));
                startActivity(intent);
            }
        });

        ButtonPackLambo2.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                intent.addCategory(Intent.CATEGORY_BROWSABLE);
                intent.setData(Uri.parse("http://90.90.185.202:8000/orders/show/11?id=11&amount=1000"));
                startActivity(intent);
            }
        });*/

        bloc_expert.setVisibility(View.GONE);
        bloc_premium.setVisibility(View.GONE);

        // If app has been closed and open again
        sharedPreferences = getBaseContext().getSharedPreferences(PREFS, MODE_PRIVATE);

        if (sharedPreferences.contains(PREFS_ACCESS_TOKEN) && sharedPreferences.contains(PREFS_USERNAME)) {
            UserAccessToken = sharedPreferences.getString(PREFS_ACCESS_TOKEN, null);
            Username = sharedPreferences.getString(PREFS_USERNAME, null);

            // Call to api for testing token
            Call<List<GitHubRepo>> callTest = client.newestArticles(UserAccessToken);

            callTest.enqueue(new Callback<List<GitHubRepo>>() {
                @Override
                public void onResponse(Call<List<GitHubRepo>> callTest, Response<List<GitHubRepo>> response) {

                    if (response.code() == 401) {
                        sharedPreferences.edit().clear().apply();
                        Toast.makeText(MainActivity.this, "La connexion a expiré, merci de vous reconnecter" + Username, Toast.LENGTH_SHORT).show();
                    }else{
                        Toast.makeText(MainActivity.this, "Content de vous revoir " + Username, Toast.LENGTH_SHORT).show();
                        headerText.setText("Bonjour, " + Username);
                        updateNavigation();
                    }
                }
                @Override
                public void onFailure(Call<List<GitHubRepo>> callTest, Throwable t) {
                    Toast.makeText(MainActivity.this, "error :(", Toast.LENGTH_SHORT).show();
                }
            });
            // End of call

        }
        // End If app has been closed and open again

        // On récupère l'access_token envoyé par LoginActivity
        Intent intent = getIntent();

        if(intent.hasExtra("AccessToken")){
            UserAccessToken = intent.getStringExtra("AccessToken");
            UserAccessToken = "Bearer " + UserAccessToken;
            Username = intent.getStringExtra("Username");
            Log.d("username", Username);
            headerText.setText("Bonjour, " + Username);
            updateNavigation();

            sharedPreferences
                    .edit()
                    .putString(PREFS_USERNAME, Username)
                    .putString(PREFS_ACCESS_TOKEN, UserAccessToken)
                    .apply();

            Toast.makeText(this, "Vous êtes connecté", Toast.LENGTH_SHORT).show();
        }
        // Fin de récupération de l'access_token

        if(intent.hasExtra("Deconnexion")) {
            Toast.makeText(this, "Vous êtes déconnecté", Toast.LENGTH_SHORT).show();
        }

        // Call to api newest articles
        Call<List<GitHubRepo>> callMain = client.newestArticles(UserAccessToken);
        listView = (ListView) findViewById(R.id.pagination_list);


        callMain.enqueue(new Callback<List<GitHubRepo>>() {
            @Override
            public void onResponse(Call<List<GitHubRepo>> callMain, Response<List<GitHubRepo>> response) {
                final List<GitHubRepo> repos = response.body();
                listView.setAdapter(new GitHubRepoAdapter(MainActivity.this, repos));


                listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                    @Override
                    public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                        Intent intentArticle = new Intent(getApplicationContext(), ArticleDetailsActivity.class);
                        intentArticle.putExtra("ArticleDetails", repos.get(i));
                        startActivity(intentArticle);

                    }
                });

                justifyListViewHeightBasedOnChildren(listView);
            }
            @Override
            public void onFailure(Call<List<GitHubRepo>> callMain, Throwable t) {
                Toast.makeText(MainActivity.this, "error :(", Toast.LENGTH_SHORT).show();
            }
        });
        // End of call

        NavigationView navigationView = findViewById(R.id.nav_view);

        navigationView.setNavigationItemSelectedListener(
                new NavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(MenuItem menuItem) {

                        mDrawerLayout.closeDrawers();

                        switch (menuItem.getItemId()) {

                            // Click on Accueil tab in navigation
                            case R.id.accueil:
                                main_title_part_1.setVisibility(View.VISIBLE);
                                main_title_part_2.setVisibility(View.VISIBLE);
                                main_sub_title.setVisibility(View.VISIBLE);
                                line_sub_title.setVisibility(View.VISIBLE);
                                listView.setVisibility(View.VISIBLE);
                                next_main_content.setVisibility(View.VISIBLE);
                                bloc_expert.setVisibility(View.GONE);
                                bloc_premium.setVisibility(View.GONE);
                                main_title_part_1.setText("Dernières ");
                                main_title_part_2.setText("Actualités");
                                sv.setScrollY(0);


                                // Call to api newest articles
                                Call<List<GitHubRepo>> callMain = client.newestArticles(UserAccessToken);
                                listView = (ListView) findViewById(R.id.pagination_list);


                                callMain.enqueue(new Callback<List<GitHubRepo>>() {
                                    @Override
                                    public void onResponse(Call<List<GitHubRepo>> callMain, Response<List<GitHubRepo>> response) {
                                        final List<GitHubRepo> repos = response.body();
                                        listView.setAdapter(new GitHubRepoAdapter(MainActivity.this, repos));


                                        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                                            @Override
                                            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                                                Intent intentArticle = new Intent(getApplicationContext(), ArticleDetailsActivity.class);
                                                intentArticle.putExtra("ArticleDetails", repos.get(i));
                                                startActivity(intentArticle);
                                            }
                                        });

                                        justifyListViewHeightBasedOnChildren(listView);
                                    }
                                    @Override
                                    public void onFailure(Call<List<GitHubRepo>> callMain, Throwable t) {
                                        Toast.makeText(MainActivity.this, "error :(", Toast.LENGTH_SHORT).show();
                                    }
                                });
                                // End of call

                                return true;
                            // End Click on Accueil tab in navigation

                            // Click on Articles tab in navigation
                            case R.id.articles:
                                main_title_part_1.setVisibility(View.VISIBLE);
                                main_title_part_2.setVisibility(View.VISIBLE);
                                main_sub_title.setVisibility(View.VISIBLE);
                                line_sub_title.setVisibility(View.VISIBLE);
                                listView.setVisibility(View.VISIBLE);
                                next_main_content.setVisibility(View.GONE);
                                bloc_expert.setVisibility(View.GONE);
                                bloc_premium.setVisibility(View.GONE);
                                main_title_part_1.setText("Nos ");
                                main_title_part_2.setText("Articles");
                                main_sub_title.setText("Toutes nos actualités sont la pour faire de vous un expert en cryptomonnaies !");

                                sv.setScrollY(0);
                                Call<List<GitHubRepo>> callArticles = client.allArticles(UserAccessToken);
                                callArticles.clone().enqueue(new Callback<List<GitHubRepo>>() {
                                    @Override
                                    public void onResponse(Call<List<GitHubRepo>> callArticles, Response<List<GitHubRepo>> response) {
                                        final List<GitHubRepo> repos = response.body();
                                        listView.setAdapter(new GitHubRepoAdapter(MainActivity.this, repos));

                                        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

                                            @Override
                                            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                                                Intent intentArticle = new Intent(getApplicationContext(), ArticleDetailsActivity.class);
                                                intentArticle.putExtra("ArticleDetails", repos.get(i));
                                                startActivity(intentArticle);
                                            }
                                        });
                                        justifyListViewHeightBasedOnChildren(listView);
                                    }

                                    @Override
                                    public void onFailure(Call<List<GitHubRepo>> callArticles, Throwable t) {
                                        Toast.makeText(MainActivity.this, "error :(", Toast.LENGTH_SHORT).show();
                                    }
                                });
                                return true;
                            // End Click on Articles tab in navigation

                            // Click on Calls tab in navigation
                            case R.id.calls:
                                main_title_part_1.setVisibility(View.VISIBLE);
                                main_title_part_2.setVisibility(View.VISIBLE);
                                main_sub_title.setVisibility(View.VISIBLE);
                                line_sub_title.setVisibility(View.VISIBLE);
                                listView.setVisibility(View.VISIBLE);
                                next_main_content.setVisibility(View.GONE);
                                bloc_expert.setVisibility(View.GONE);
                                bloc_premium.setVisibility(View.GONE);
                                main_title_part_1.setText("Analyses et ");
                                main_title_part_2.setText("Calls");
                                main_sub_title.setText("Nos calls en direct pour faire fleurir votre investissement");
                                sv.setScrollY(0);
                                Call<List<GitHubRepo>> callCalls = client.ourCalls(UserAccessToken);
                                callCalls.clone().enqueue(new Callback<List<GitHubRepo>>() {
                                    @Override
                                    public void onResponse(Call<List<GitHubRepo>> callCalls, Response<List<GitHubRepo>> response) {
                                        final List<GitHubRepo> repos = response.body();
                                        listView.setAdapter(new GitHubRepoAdapter(MainActivity.this, repos));

                                        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

                                            @Override
                                            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                                                Intent intentArticle = new Intent(getApplicationContext(), ArticleDetailsActivity.class);
                                                intentArticle.putExtra("ArticleDetails", repos.get(i));
                                                startActivity(intentArticle);
                                            }
                                        });
                                        justifyListViewHeightBasedOnChildren2(listView);
                                    }

                                    @Override
                                    public void onFailure(Call<List<GitHubRepo>> callCalls, Throwable t) {
                                        Toast.makeText(MainActivity.this, "error :(" + t, Toast.LENGTH_SHORT).show();
                                    }
                                });
                                return true;
                            // End Click on Calls tab in navigation

                            // Click on Airdrop tab in navigation
                            case R.id.airdrops:
                                main_title_part_1.setVisibility(View.VISIBLE);
                                main_title_part_2.setVisibility(View.VISIBLE);
                                main_sub_title.setVisibility(View.VISIBLE);
                                line_sub_title.setVisibility(View.VISIBLE);
                                listView.setVisibility(View.VISIBLE);
                                next_main_content.setVisibility(View.GONE);
                                bloc_expert.setVisibility(View.GONE);
                                bloc_premium.setVisibility(View.GONE);
                                main_title_part_1.setText("Les ");
                                main_title_part_2.setText("Airdrops");
                                main_sub_title.setText("De l'argent donné, ça ne se refuse pas, profitez des meilleurs Airdrops !");
                                sv.setScrollY(0);
                                Call<List<GitHubRepo>> callAirdrop = client.ourAirdrops(UserAccessToken);
                                callAirdrop.clone().enqueue(new Callback<List<GitHubRepo>>() {
                                    @Override
                                    public void onResponse(Call<List<GitHubRepo>> callAirdrop, Response<List<GitHubRepo>> response) {
                                        final List<GitHubRepo> repos = response.body();
                                        listView.setAdapter(new GitHubRepoAdapter(MainActivity.this, repos));

                                        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {

                                            @Override
                                            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                                                Intent intentArticle = new Intent(getApplicationContext(), ArticleDetailsActivity.class);
                                                intentArticle.putExtra("ArticleDetails", repos.get(i));
                                                startActivity(intentArticle);
                                            }
                                        });
                                        justifyListViewHeightBasedOnChildren2(listView);
                                    }

                                    @Override
                                    public void onFailure(Call<List<GitHubRepo>> callAirdrop, Throwable t) {
                                        Toast.makeText(MainActivity.this, "error :(", Toast.LENGTH_SHORT).show();
                                    }
                                });
                                return true;
                            // End Click on Airdrop tab in navigation

                            case R.id.team:
                                main_title_part_1.setVisibility(View.GONE);
                                main_title_part_2.setVisibility(View.GONE);
                                main_sub_title.setVisibility(View.GONE);
                                line_sub_title.setVisibility(View.GONE);
                                listView.setVisibility(View.GONE);
                                next_main_content.setVisibility(View.GONE);
                                bloc_premium.setVisibility(View.GONE);
                                bloc_expert.setVisibility(View.VISIBLE);
                                sv.setScrollY(0);
                                return true;

                            case R.id.premium:
                                main_title_part_1.setVisibility(View.GONE);
                                main_title_part_2.setVisibility(View.GONE);
                                main_sub_title.setVisibility(View.GONE);
                                line_sub_title.setVisibility(View.GONE);
                                listView.setVisibility(View.GONE);
                                next_main_content.setVisibility(View.GONE);
                                bloc_expert.setVisibility(View.GONE);
                                bloc_premium.setVisibility(View.VISIBLE);
                                sv.setScrollY(0);
                                return true;

                            case R.id.contact:
                                Intent intentContact = new Intent(getApplicationContext(), ContactActivity.class);
                                intentContact.addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);
                                startActivity(intentContact);
                                return true;

                            // Click on Connexion tab in navigation
                            case R.id.connexion:
                                Intent connexion = new Intent(getApplicationContext(), LoginActivity.class);
                                connexion.setFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);
                                startActivity(connexion);
                                return true;
                            // End Click on Connexion tab in navigation

                            // Click on deconnexion tab in navigation
                            case R.id.deconnexion:
                                sharedPreferences.edit().clear().apply();
                                Intent intent2 = new Intent(getApplicationContext(), MainActivity.class);
                                intent2.putExtra("Deconnexion", "Vous êtes déconnecté");
                                intent2.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                                startActivity(intent2);
                                return true;
                            // End Click on deconnexion tab in navigation
                        }

                        return true;
                    }
                });
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                mDrawerLayout.openDrawer(GravityCompat.START);
                return true;
        }
        return super.onOptionsItemSelected(item);
    }


    private void updateNavigation()
    {
        NavigationView navigationView = findViewById(R.id.nav_view);
        Menu nav_Menu = navigationView.getMenu();
        nav_Menu.findItem(R.id.connexion).setVisible(false);
        nav_Menu.findItem(R.id.deconnexion).setVisible(true);
    }

    public static void justifyListViewHeightBasedOnChildren (ListView listView) {

        ListAdapter adapter = listView.getAdapter();

        if (adapter == null) {
            return;
        }
        ViewGroup vg = listView;
        int totalHeight = 0;
        int padding = 0;
        for (int i = 0; i < adapter.getCount(); i++) {
            padding += 28;
            View listItem = adapter.getView(i, null, vg);
            listItem.measure(0, 0);
            totalHeight += listItem.getMeasuredHeight();
        }

        ViewGroup.LayoutParams par = listView.getLayoutParams();
        par.height = totalHeight + (listView.getDividerHeight() * (adapter.getCount() + padding));
        listView.setLayoutParams(par);
        listView.requestLayout();
    }

    public static void justifyListViewHeightBasedOnChildren2 (ListView listView) {

        ListAdapter adapter = listView.getAdapter();

        if (adapter == null) {
            return;
        }
        ViewGroup vg = listView;
        int totalHeight = 0;
        int padding = 0;
        for (int i = 0; i < adapter.getCount(); i++) {
            padding += 25;
            View listItem = adapter.getView(i, null, vg);
            listItem.measure(0, 0);
            totalHeight += listItem.getMeasuredHeight();
        }

        ViewGroup.LayoutParams par = listView.getLayoutParams();
        par.height = totalHeight + (listView.getDividerHeight() * (adapter.getCount() + padding));
        listView.setLayoutParams(par);
        listView.requestLayout();
    }

}