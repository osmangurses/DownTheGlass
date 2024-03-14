using DG.Tweening;
using JetBrains.Annotations;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BallButtons : MonoBehaviour
{
    public int indexOfButton,moveRotate;
    public string playerPrefCommand;
    public bool isButtonOpened, isButtonSelected;
    public ShopManager shopManager;
    public Button btn;
    public Text coinText,selectedText;
    private void Awake()
    {
        coinText=GameObject.Find("CoinText").GetComponent<Text>();
        playerPrefCommand="isBallChestOpened"+indexOfButton.ToString();
        if (!PlayerPrefs.HasKey(playerPrefCommand))
        {
            PlayerPrefs.SetInt(playerPrefCommand, 0);
        }
        else if (PlayerPrefs.GetInt(playerPrefCommand)==1)
        {
            isButtonOpened = true;
        }
        moveRotate= -1;
    }
    void Start()
    {
        shopManager=GameObject.Find("ShopManager").GetComponent<ShopManager>();
        
        btn=gameObject.GetComponent<Button>();
        btn.onClick.AddListener(Clicked);
        coinText.text= PlayerPrefs.GetInt("Coin").ToString();
        OpenButton();
        if (indexOfButton==PlayerPrefs.GetInt("BallSpriteIndex"))
        {
            selectedText.transform.SetParent(gameObject.transform, true);
            selectedText.transform.localPosition = new Vector3(0, -400, 0);
        }

    }
    private void Move()
    {
        gameObject.transform.DOLocalMoveY(gameObject.transform.localPosition.y + (50 * moveRotate), 0.5f);
        moveRotate*=-1;
        Invoke("Move", 0.5f);
    }
    public void OpenButton()
    {
        if (isButtonOpened)
        {

            gameObject.GetComponent<Image>().sprite = shopManager.ballSprites[indexOfButton];
            gameObject.transform.localScale = gameObject.transform.localScale / 2;
            gameObject.transform.localScale = new Vector3(gameObject.transform.localScale.x, gameObject.transform.localScale.x / 2, 1000);

            Destroy(gameObject.transform.GetChild(0).gameObject);
            gameObject.GetComponent<Image>().color= Color.white;
            Move();
            gameObject.GetComponent<Image>().preserveAspect = false;
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
                PlayerPrefs.SetInt("Coin", PlayerPrefs.GetInt("Coin") - 100);
                coinText.text = PlayerPrefs.GetInt("Coin").ToString();
                gameObject.transform.GetChild(1).GetComponent<ParticleSystem>().Play();
                gameObject.GetComponent<Image>().preserveAspect= false;
            }
        }
        else
        {
            PlayerPrefs.SetInt("BallSpriteIndex",indexOfButton);
            selectedText.transform.SetParent(gameObject.transform, true);
            selectedText.transform.localPosition= new Vector3(0, -400,0);
            
           
        }
    }

   
}
