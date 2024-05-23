/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/*
    issue: given the head of a linked list return the middle node
           if, two middle nodes return the second one
    input: head of linked list
    output: middle node
    constraints:
    edge:
        - it can have only one node
        - it can have two nodes
    ideas:
        - get the count of nodes on the first run, divide it by two if even get the node
        - create a dictionary where the key is the position where a node was found
            - divide total by two, if the result is even get the node that precedes
    traces:
        - [1]
        - [1, 2]
        - [1, 2, 3, 4, 5]
        - [1, 2, 3, 4, 5, 6]
    pseudo code:
        - if there is no next on the head return the head
        - create a dictionary and a length counter
        - iterate while there is a .next
        - if there are two return the second node
        - if length is even, return length / 2 + 1
        - divide length / 2 and round up
    code:
    optimize pseudo code:
 */
type ListNode = { val: any; next: ListNode };

function middleNode(head: ListNode): ListNode {
  if (head.next === null) return head;

  const dict: { [key: string]: ListNode } = {};
  let start = head;
  let length = 0;

  while (start.next) {
    length++;
    dict[length] = start;
    start = start.next;
  }

  length++;
  dict[length] = start;

  if (length === 2) return dict[2];
  else if (length % 2 === 0) {
    return dict[length / 2 + 1];
  }

  return dict[Math.ceil(length / 2)];
}
