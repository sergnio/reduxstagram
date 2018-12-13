/**
 Action Creators

 These fire events which the reducer will handle
 We will later call these functions from inside our component

 Later these functions get bound to 'dispatch' fires the actual event
 Right now they just return an object

 It's a code convention to use all capitals and snake case for the event names
 We use const to store the name of the event so it is immutable

 */


// Want to send as little information as possible
/**
 * Increments number of likes
 * @param index id of post
 * @returns {{type: string, index: *}}
 */
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

/**
 * Add comment
 * @param postId
 * @param author
 * @param comment
 * @returns {{type: string, postId: *, author: *, comment: *}}
 */
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }

}

/**
 * Remove comment
 * @param postId
 * @param index
 * @returns {{type: string, postId: *, index: *}}
 */
export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index
    }

}

/*
  Comments
*/
