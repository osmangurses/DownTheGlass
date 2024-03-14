using DG.Tweening;
using JetBrains.Annotations;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BackgroundButtons : MonoBehaviour
{
    public int indexOfButton;
    public string playerPrefCommand;
    public bool isButtonOpened, isButtonSelected;
    public ShopManager shopManager;
    public Button btn;
    public Text coinText,selectedText;
    private void Awake()
    {
        coinText=GameObject.Find("CoinText").GetComponent<Text>();
        playerPrefCommand="isBackgroundChestOpened"+indexOfButton.ToString();
        if (!PlayerPrefs.HasKey(playerPrefCommand))
        {
            PlayerPrefs.SetInt(playerPrefCommand, 0);
        }
        else if (PlayerPrefs.GetInt(playerPrefCommand)==1)
        {
            isButtonOpened = true;
        }
        if (isButtonOpened)
        {
            PlayerPrefs.SetInt(playerPrefCommand, 1);
        }
    }
    void Start()
    {
        shopManager=GameObject.Find("ShopManager").GetComponent<ShopManager>();
        OpenButton();
        btn=gameObject.GetComponent<Button>();
        btn.onClick.AddListener(Clicked);
        coinText.text= PlayerPrefs.GetInt("Coin").ToString();
        if (indexOfButton == PlayerPrefs.GetInt("BackgroundImageIndex"))
        {
            selectedText.transform.SetParent(gameObject.transform, true);
            selectedText.transform.localPosition = new Vector3(0, -350, 0);
        }

    }
    public void OpenButton()
    {
        if (isButtonOpened)
        {

            gameObject.GetComponent<Image>().sprite = shopManager.backgroundSprites[indexOfButton];
            Destroy(gameObject.transform.GetChild(0).gameObject);
            gameObject.GetComponent<Image>().color = Color.white;
        }
    }
    public void Clicked()
    {
        if (!isButtonOpened) // Butona Týklandýðýnda eðer buton açýk deðilse
        {
            if (PlayerPrefs.GetInt("Coin")>=100) //Butona týklandýðýnda eðer coin 100den fazlaysa butonu açýk hale getiriyor
            {
                isButtonOpened = true;
                PlayerPrefs.SetInt(playerPrefCommand, 1);
                OpenButton();
                Color color = Color.white;
                color.a = 0;
                gameObject.GetComponent<Image>().color= color;
                Color colorr = Color.white;
                colorr.a = 255;
                gameObject.GetComponent<Image>().DOColor(colorr, 1f);
                PlayerPrefs.SetInt("Coin", PlayerPrefs.GetInt("Coin") - 100);
                coinText.text = PlayerPrefs.GetInt("Coin").ToString();
                gameObject.transform.GetChild(1).GetComponent<ParticleSystem>().Play();
            }
        }
        else
        {
            PlayerPrefs.SetInt("BackgroundImageIndex",indexOfButton);
            selectedText.transform.SetParent(gameObject.transform, true);
            selectedText.transform.localPosition = new Vector3(0, -350, 0);
        }
    }

   
}
