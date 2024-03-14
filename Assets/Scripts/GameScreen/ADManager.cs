using GoogleMobileAds.Api;
using UnityEngine;

public class ADManager : MonoBehaviour
{
    private RewardedAd rewardedAd;
    private InterstitialAd interstitial;

    [System.Obsolete]
    private void Start()
    {
       

        // Initialize the Google Mobile Ads SDK.
        MobileAds.Initialize(initStatus => { });
        LoadInterstitialAd();
        LoadRewardedAd();
    }
    [System.Obsolete]
    public void LoadRewardedAd()
    {
        // Initialize the rewarded ad
        this.rewardedAd = new RewardedAd("ca-app-pub-7452706513777135/2958827879");

        // Create an empty ad request
        AdRequest request = new AdRequest.Builder().Build();

        // Load the rewarded ad with the request
        this.rewardedAd.LoadAd(request);

        // Attach ad event handlers
        this.rewardedAd.OnUserEarnedReward += HandleUserEarnedReward;
        
    }

    [System.Obsolete]
    public void ShowRewardedAd()
    {
        if (this.rewardedAd.IsLoaded())
        {
            this.rewardedAd.Show();
        }
        LoadRewardedAd();
    }

    public void HandleUserEarnedReward(object sender, Reward args)
    {
        // Give the player their reward
        GameObject.Find("GameManager").GetComponent<GameManager>().ADWatched();
    }
    

   

    [System.Obsolete]
    public void LoadInterstitialAd()
    {
        // Create interstitial ad
        interstitial = new InterstitialAd("ca-app-pub-7452706513777135/7483276684");

        // Load the interstitial ad
        AdRequest request = new AdRequest.Builder().Build();
        interstitial.LoadAd(request);
        
    }

    [System.Obsolete]
    public void ShowInterstitialAd()
    {
        // Check if the interstitial ad is loaded and show it
        if (interstitial.IsLoaded())
        {
            interstitial.Show();
        }
        else
        {
            Debug.Log("Interstitial ad is not ready yet.");
        }
        LoadInterstitialAd();
    }
}
