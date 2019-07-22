
    this.insert = function (head, data) {
        var node = new Node(data);
        if (head == null) {
            head = node;
        } else {

            while (head.next != null) {
                temp = temp.next;
            }

            temp.next = node;
        }
        return head;
    };
