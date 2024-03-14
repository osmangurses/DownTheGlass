using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallJump : MonoBehaviour
{
    // Start is called before the first frame update
    public float jumpForce,speed;
    public int yon;
    void Start()
    {
        yon = 0;
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag=="startorshop")
        {
            yon = 1;
        }
        else
        {
            yon = -1;
        }
        // GetComponent<Rigidbody2D>().AddForce(Vector2.up * jumpForce);
    }
    private void OnCollisionStay2D(Collision2D collision)
    {
        GetComponent<Rigidbody2D>().velocity += Vector2.right * speed * yon * Time.deltaTime;
    }
    private void OnCollisionExit2D(Collision2D collision)
    {
        GetComponent<Rigidbody2D>().velocity= Vector2.zero;
    }
    // Update is called once per frame
    void FixedUpdate()
    {
        if (transform.position.y<=-6)
        {
            Instantiate(gameObject).transform.position= new Vector3(-1.3f, 6, 0);
            Destroy(gameObject);
            
        }

    }
}
