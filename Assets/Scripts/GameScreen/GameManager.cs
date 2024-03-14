using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class GameManager : MonoBehaviour
{
    // Start is called before the first frame update
    public static GameManager Instance;
    public GameObject firsTouchButton,shopButton,settingsButton,ground, breakableSquare, nonBreakableSquare,coin,x2,p2,jumpPluser,jumpSubber,lastGround,fire,gameOverPanel, gameOverPanelADWatched;
    public GameObject[] enemies;
    public int groundCount,bestScore,coinX,powerCounter,particleManager,aDWatched;
    public Vector2[] locationOfGroundParts;
    public Text tapToPlayText, scoreText, bestscoreText;
    public Image background;
    public Sprite[] backgroundSprites,ballSprites;
    public Slider musicVolume,sfxVolume;
    public AudioSource[] sfxAudios;
    public PlayerMovement playerMovement;
   
    private void Awake()
    {
       powerCounter= 0;
        if (!PlayerPrefs.HasKey("Best"))
        {
            PlayerPrefs.SetInt("Best", 0);
        }
        if (!PlayerPrefs.HasKey("Coin"))
        {
            PlayerPrefs.SetInt("Coin", 0);
        }
        if (!PlayerPrefs.HasKey("BackgroundImageIndex"))
        {
            PlayerPrefs.SetInt("BackgroundImageIndex", 0);
        }
        if (!PlayerPrefs.HasKey("BallSpriteIndex"))
        {
            PlayerPrefs.SetInt("BallSpriteIndex", 0);
        }
        if (!PlayerPrefs.HasKey("TrailIndex"))
        {
            PlayerPrefs.SetInt("TrailIndex", 0);
        }
        Instance = this;
    }

    [System.Obsolete]
    void Start()
    {
        TapToPlayBlink();
        Application.targetFrameRate = Screen.currentResolution.refreshRate;
        PlayerPrefs.SetInt("DeathCount", PlayerPrefs.GetInt("DeathCount") + 1);
        
        scoreText.text=PlayerPrefs.GetInt("Score").ToString();
        aDWatched= PlayerPrefs.GetInt("ADWatched");
        if (PlayerPrefs.HasKey("musicVolume"))
        {
            GetComponent<AudioSource>().volume = PlayerPrefs.GetFloat("musicVolume")/2;
        }
        
        coinX = 1;
        groundCount = PlayerPrefs.GetInt("Score");
        
        bestScore = PlayerPrefs.GetInt("Best");
        bestscoreText.text=bestScore.ToString();
        Time.timeScale = 1.0f;
        GameObject.Find("TotalCoin").GetComponent<Text>().text = PlayerPrefs.GetInt("Coin").ToString();
        SetBackgroundImage();
        SetBallSprite();
        SetTrail();
        SetSfxVolume();
       
        

    }

    // Update is called once per frame

    public void TapToPlayBlink()
    {
        Color originalColor = tapToPlayText.color;
        float blinkDuration = 1.5f;
        int blinkCount = -1;
        float blinkAlpha = 0.0f;
        Color blinkColor = new Color(originalColor.r, originalColor.g, originalColor.b, blinkAlpha);
        tapToPlayText.color = originalColor;
        tapToPlayText.DOFade(blinkAlpha, blinkDuration / 2)
            .SetLoops(blinkCount * 2, LoopType.Yoyo)
            .OnComplete(() =>
            {
                tapToPlayText.color = originalColor;
            });
    }
    public void SetSfxVolume()
    {
        if (PlayerPrefs.HasKey("sfxVolume"))
        {
            for (int i = 0; i < sfxAudios.Length; i++)
            {
                sfxAudios[i].volume = PlayerPrefs.GetFloat("sfxVolume");
            }
        }
       
    }
    public void SetBackgroundImage()
    {
        background.sprite = backgroundSprites[PlayerPrefs.GetInt("BackgroundImageIndex")];
        if (PlayerPrefs.GetInt("BackgroundImageIndex")!=0)
        {
            background.color = Color.white;
        }
    }
    public void SetBallSprite()
    {
        GameObject.Find("Player").GetComponent<SpriteRenderer>().sprite = ballSprites[PlayerPrefs.GetInt("BallSpriteIndex")];
    }
    public void SetTrail()
    {
        GameObject.Find("Player").transform.GetChild(PlayerPrefs.GetInt("TrailIndex")).gameObject.SetActive(true);
    }
    public void GroundSpawner()
    {
       
        if (powerCounter==0)
        {
            groundCount++;
            scoreText.text = groundCount.ToString();
            if (groundCount > bestScore)
            {
                bestScore = groundCount;
                bestscoreText.text = scoreText.text;
                PlayerPrefs.SetInt("Best", bestScore);
            }

            lastGround = Instantiate(ground);
            GameObject groundTemp = lastGround;
            groundTemp.transform.position = new Vector3(0, -3.5f * (groundCount + 1-PlayerPrefs.GetInt("Score")), 0);
            for (int i = 0; i < 9; i++)
            {
                locationOfGroundParts[i] = new Vector2(-2f + (i * 0.5f), groundTemp.transform.position.y);
            }
            int breakableIndex;
            breakableIndex = Random.Range(0, 9);
            GameObject newGround = Instantiate(breakableSquare);
            newGround.transform.position = locationOfGroundParts[breakableIndex];
            newGround.transform.SetParent(groundTemp.transform);
            int triangleIndex = Random.Range(0, 9);
            while (triangleIndex == breakableIndex || triangleIndex == (breakableIndex+1) || triangleIndex == (breakableIndex - 1) || triangleIndex == 0 || triangleIndex == 8)
            {
                triangleIndex = Random.Range(0, 9);
            }
            for (int i = 0; i < 9; i++)
            {
                if (i != breakableIndex)
                {
                    newGround = Instantiate(nonBreakableSquare);
                    newGround.transform.position = locationOfGroundParts[i];
                    newGround.transform.SetParent(groundTemp.transform);
                   /* if (((int)Random.Range(0,2))==0)
                    {
                       newGround.transform.Rotate(0, 180, 0);
                    }*/
                    if (i == triangleIndex)
                    {
                        int enemyIndex = Random.Range(0, enemies.Length);
                        if (groundCount>14)
                        {
                             enemyIndex = Random.Range(0, enemies.Length);
                        }
                        else if (groundCount>9)
                        {
                            enemyIndex = Random.Range(0, enemies.Length-1);
                        }
                        else
                        {
                            enemyIndex = 0;
                        }
                        

                        newGround = Instantiate(enemies[enemyIndex]);
                        if (enemyIndex == 0)
                        {
                            newGround.transform.position = locationOfGroundParts[i] + new Vector2(0, 0.35f);
                        }
                        else if (enemyIndex == 1)
                        {
                            newGround.transform.SetParent(groundTemp.transform);
                            newGround.transform.position = locationOfGroundParts[i]+ new Vector2(-locationOfGroundParts[i].x, 0.4f);
                            
                        }
                        else if (enemyIndex == 2)
                        {
                            newGround.transform.position = locationOfGroundParts[i] + new Vector2(0, 0.4f);
                        }
                        else
                        {
                            newGround.transform.position = locationOfGroundParts[i] + new Vector2(0, 0);
                        }
                       
                        newGround.transform.SetParent(groundTemp.transform);

                    }
                }
            }
            int posibilityForCoin = Random.Range(0, 101);
            if (posibilityForCoin < 51)
            {
                newGround = Instantiate(coin);
                newGround.transform.position = locationOfGroundParts[(int)Random.Range(0, 9)] + new Vector2(0, Random.Range(0.8f, 2f));
                newGround.transform.SetParent(groundTemp.transform);
                float firstCoinSapwnPositionX = newGround.transform.position.x;
                float firstCoinSpawnPositionY = newGround.transform.position.y;
                for (int i = 0; i < (GameObject.Find("GameManager").GetComponent<GameManager>().coinX - 1); i++)
                {
                    if (firstCoinSapwnPositionX <= 0)
                    {
                        newGround = Instantiate(coin);
                        newGround.transform.position = new Vector2((i + 1) / 16f + firstCoinSapwnPositionX, firstCoinSpawnPositionY);
                        newGround.transform.SetParent(groundTemp.transform);
                    }
                    else
                    {
                        newGround = Instantiate(coin);
                        newGround.transform.position = new Vector2((-i - 1) / 16f + firstCoinSapwnPositionX, firstCoinSpawnPositionY);
                        newGround.transform.SetParent(groundTemp.transform);
                    }

                }

            }
            else if (posibilityForCoin < 56 && coinX<9)
            {
                newGround = Instantiate(x2);
                newGround.transform.position = locationOfGroundParts[(int)Random.Range(0, 9)] + new Vector2(0, Random.Range(0.90f, 2f));
                newGround.transform.SetParent(groundTemp.transform);
            }
            else if (posibilityForCoin < 61 && coinX > 1)
            {
                newGround = Instantiate(p2);
                newGround.transform.position = locationOfGroundParts[(int)Random.Range(0, 9)] + new Vector2(0, Random.Range(0.90f, 1f));
                newGround.transform.SetParent(groundTemp.transform);
            }
            else if (posibilityForCoin < 66 && playerMovement.jumpCount <4)
            {
                newGround = Instantiate(jumpPluser);
                newGround.transform.position = locationOfGroundParts[(int)Random.Range(0, 9)] + new Vector2(0, Random.Range(0.90f, 1f));
                newGround.transform.SetParent(groundTemp.transform);
            }
            else if (posibilityForCoin < 71 && playerMovement.jumpCount > 2)
            {
                newGround = Instantiate(jumpSubber);
                newGround.transform.position = locationOfGroundParts[(int)Random.Range(0, 9)] + new Vector2(0, Random.Range(0.90f, 1f));
                newGround.transform.SetParent(groundTemp.transform);
            }



            particleManager--;

        }
        else
        {
            if (powerCounter == 3)
            {
                ChangeGroundToPower();
            }
            PowerSpawner();
            
            
        }

    }
    public void PowerSpawner()
    {
        
        groundCount++;
        scoreText.text = groundCount.ToString();
        if (groundCount > bestScore)
        {
            bestScore = groundCount;
            bestscoreText.text = scoreText.text;
            PlayerPrefs.SetInt("Best", bestScore);
        }

        GameObject groundTemp = Instantiate(ground);
        groundTemp.transform.GetChild(0).gameObject.GetComponent<ParticleSystem>().Play();
        groundTemp.transform.position = new Vector3(0, -3.5f * (groundCount + 1 - PlayerPrefs.GetInt("Score")), 0);
        for (int i = 0; i < 9; i++)
        {
            locationOfGroundParts[i] = new Vector2(-2f + (i * 0.5f), groundTemp.transform.position.y);
        }
        for (int i = 0; i < 9; i++)
        {
            
                GameObject newGround = Instantiate(breakableSquare);
                newGround.transform.position = locationOfGroundParts[i];
                newGround.transform.SetParent(groundTemp.transform);
                
            
        }
        powerCounter--;
        particleManager--;
        Debug.Log("Working");
        playerMovement.powerCounter = -2;
        
    }
    public void ChangeGroundToPower()
    {
        //fire.SetActive(true);
        Destroy(lastGround);
        groundCount--;
        PowerSpawner();
    }
    public void MainMenu()
    {
        PlayerPrefs.SetInt("Score", 0);
        SceneManager.LoadScene(1);
    }

    //[System.Obsolete]
    public void Restart()
    {
        
        PlayerPrefs.SetInt("ADWatched", 0);
        PlayerPrefs.SetInt("Score", 0);
        SceneManager.LoadScene(1);
        
    }

    //[System.Obsolete]
    [System.Obsolete]
    public void WatchAD() 
    {
        GameObject.Find("ADManager").GetComponent<ADManager>().ShowRewardedAd();
    }
    public void ADWatched() 
    {

        PlayerPrefs.SetInt("ADWatched", 1);
        PlayerPrefs.SetInt("Score", groundCount);
        SceneManager.LoadScene(1);
    }

    [System.Obsolete]
    public void SmallAD() 
    {
        GameObject.Find("ADManager").GetComponent<ADManager>().ShowInterstitialAd();
        PlayerPrefs.SetInt("DeathCount", 0);
    }
    public void Shop()
    {
        SceneManager.LoadScene(2);
    }
    public void Settings()
    {
        SceneManager.LoadScene(3);
    }
    public void FirstTouch()
    {
        tapToPlayText.gameObject.SetActive(false);
        shopButton.SetActive(false);
        settingsButton.SetActive(false);
        firsTouchButton.SetActive(false);
        GetComponent<AudioSource>().Play();
    }

}
