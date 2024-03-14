using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class TrailButtons : MonoBehaviour
{
    public int indexOfButton;
    public string playerPrefCommand;
    public bool isButtonOpened, isButtonSelected;
    public ShopManager shopManager;
    public Button btn;
    public Text coinText,selectedText;
    private void Awake()
    {
        coinText = GameObject.Find("CoinText").GetComponent<Text>();
        playerPrefCommand = "isTrailChestOpened" + indexOfButton.ToString();
        if (!PlayerPrefs.HasKey(playerPrefCommand))
        {
            PlayerPrefs.SetInt(playerPrefCommand, 0);
        }
        else if (PlayerPrefs.GetInt(playerPrefCommand) == 1)
        {
            isButtonOpened = true;
        }
    }
    void Start()
    {
        shopManager = GameObject.Find("ShopManager").GetComponent<ShopManager>();

        btn = gameObject.GetComponent<Button>();
        btn.onClick.AddListener(Clicked);
        coinText.text = PlayerPrefs.GetInt("Coin").ToString();
        OpenButton();
        if (indexOfButton == PlayerPrefs.GetInt("TrailIndex"))
        {
            selectedText.transform.SetParent(gameObject.transform, true);
            selectedText.transform.localPosition = new Vector3(0, -200, 0);
        }

    }
    public void OpenButton()
    {
        if (isButtonOpened)
        {

            //gameObject.GetComponent<Image>().sprite = shopManager.ballSprites[indexOfButton];
            gameObject.transform.GetChild(1).gameObject.SetActive(true);
            gameObject.transform.GetChild(2).gameObject.SetActive(true);

            Destroy(gameObject.transform.GetChild(0).gameObject);
            Color color = gameObject.GetComponent<Image>().color;
            color.a = 0.001f;
            gameObject.GetComponent<Image>().color = color;
            
        }
    }
    public void Clicked()
    {
        if (!isButtonOpened) // Butona Týklandýðýnda eðer buton açýk deðilse
        {
            if (PlayerPrefs.GetInt("Coin") >= 100) //Butona týklandýðýnda eðer coin 100den fazlaysa butonu açýk hale getiriyor
            {
                isButtonOpened = true;
                PlayerPrefs.SetInt(playerPrefCommand, 1);
                OpenButton();
                PlayerPrefs.SetInt("Coin", PlayerPrefs.GetInt("Coin") - 100);
                coinText.text = PlayerPrefs.GetInt("Coin").ToString();
                gameObject.transform.GetChild(3).GetComponent<ParticleSystem>().Play();
            }
        }
        else
        {
            PlayerPrefs.SetInt("TrailIndex", indexOfButton);
            selectedText.transform.SetParent(gameObject.transform, true);
            selectedText.transform.localPosition = new Vector3(0, -200, 0);
        }
    }
}
