using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class p2 : MonoBehaviour
{
    // Start is called before the first frame update
    public Text coinXText;
    public AudioSource sfxAudio;

   
    void Start()
    {
        sfxAudio = GameObject.Find("BadCollectSfx").GetComponent<AudioSource>();
        coinXText = GameObject.Find("CoinX").GetComponent<Text>();
        
    }

    // Update is called once per frame
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag=="Player") 
        {
            sfxAudio.Play();
            GameObject.Find("GameManager").GetComponent<GameManager>().coinX =  GameObject.Find("GameManager").GetComponent<GameManager>().coinX/2;
            coinXText.text= GameObject.Find("GameManager").GetComponent<GameManager>().coinX.ToString()+"X";         
            gameObject.transform.DOScale(new Vector2(5, 5), 0.2f);
            Color color = Color.white;
            color.a = 0;
            gameObject.GetComponent<SpriteRenderer>().DOColor(color, 0.2f);
            if (GameObject.Find("GameManager").GetComponent<GameManager>().coinX>0)
            {
                GameObject[] coins = GameObject.FindGameObjectsWithTag("Coin");
                for (int i = 0; i < (coins.Length); i++)
                {
                    Destroy(coins[i]);
                }

                if (GameObject.FindGameObjectWithTag("Coin") != null)
                {
                    GameObject oldCoin = GameObject.FindGameObjectWithTag("Coin").gameObject;
                    Vector2 positionOfCoin = oldCoin.transform.position;
                    oldCoin.name = "Coin";
                    SpawnNewCoins(positionOfCoin, oldCoin.gameObject.transform.parent.gameObject, oldCoin);
                    Destroy(oldCoin);
                }
            }
            
        }
        Destroy(gameObject, 0.2f);
    }
    
    public void SpawnNewCoins(Vector2 v2, GameObject ground, GameObject coin)
    {
        GameObject newGround = Instantiate(coin);
        newGround.transform.position = v2;
        newGround.transform.SetParent(ground.transform);
        float firstCoinSapwnPositionX = newGround.transform.position.x;
        float firstCoinSpawnPositionY = newGround.transform.position.y;
        newGround.GetComponent<Animator>().enabled = true;
        newGround.GetComponent<CapsuleCollider2D>().enabled = true;
        newGround.GetComponent<Coin>().enabled = true;
        for (int i = 0; i < (GameObject.Find("GameManager").GetComponent<GameManager>().coinX - 1); i++)
        {
            if (firstCoinSapwnPositionX <= 0)
            {
                newGround = Instantiate(coin);
                newGround.transform.position = new Vector2((i + 1) / 16f + firstCoinSapwnPositionX, firstCoinSpawnPositionY);
                newGround.transform.SetParent(ground.transform);
                newGround.GetComponent<Animator>().enabled = true;
                newGround.GetComponent<CapsuleCollider2D>().enabled = true;
                newGround.GetComponent<Coin>().enabled = true;
            }
            else
            {
                newGround = Instantiate(coin);
                newGround.transform.position = new Vector2((-i - 1) / 16f + firstCoinSapwnPositionX, firstCoinSpawnPositionY);
                newGround.transform.SetParent(ground.transform);
                newGround.GetComponent<Animator>().enabled = true;
                newGround.GetComponent<CapsuleCollider2D>().enabled = true;
                newGround.GetComponent<Coin>().enabled = true;
            }

        }
    }


}
