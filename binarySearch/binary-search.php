<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function search($nums, $target)
    {
        $i = 0;
        $flag = 0;
        foreach ($nums as $val) {
            if ($val === $target) {
                $flag = 1;
                break;
            }
            $i++;
        }
        if ($flag == 1) {
            return $i;
        } else {
            return -1;
        }
    }
}
