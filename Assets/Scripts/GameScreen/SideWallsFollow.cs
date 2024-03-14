using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SideWallsFollow : MonoBehaviour
{
    public Transform playerTransform;
    void Update()
    {
        if (playerTransform != null)
        {
            transform.position = new Vector2(transform.position.x, playerTransform.position.y);
        }
    }
}
